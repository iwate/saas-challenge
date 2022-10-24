import React, { useEffect, useState } from "react";

// Msal imports
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import { InteractionStatus, InteractionType, InteractionRequiredAuthError } from "@azure/msal-browser";
import { loginRequest } from "../authConfig";

async function getAccessToken(msalInstance) {
    const account = msalInstance.getActiveAccount();
    if (!account) {
        throw Error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
    }

    const response = await msalInstance.acquireTokenSilent({
        ...loginRequest,
        account: account
    });

    console.log(response)

    return response.idToken;
}

const ProfileContent = () => {
    const { instance, inProgress } = useMsal();
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        if (!apiData && inProgress === InteractionStatus.None) {
            console.log('effect')
            getAccessToken(instance).then(token => {
                if(token) {
                    const headers = new Headers();
                    headers.append('Authorization', `Bearer ${token}`)
                    fetch('https://saas-challenge-bg.azurewebsites.net/api/HttpTrigger1?name=iwate', {
                        headers
                    })
                    .then(response => response.text())
                    .then(console.log);
                }
                console.log('token',token);
            }).catch(console.error)
            // callApi().then(response => setApiData(response)).catch((e) => {
            //     if (e instanceof InteractionRequiredAuthError) {
            //         instance.acquireTokenRedirect({
            //             ...loginRequest,
            //             account: instance.getActiveAccount()
            //         });
            //     }
            // });
        }
    }, [inProgress, apiData, instance]);
  
    return (
        <pre>
            { apiData ? JSON.stringify(apiData) : null }
        </pre>
    );
};
const ErrorComponent = ({error}) => {
    return <p>An Error Occurred: {error.errorCode}</p>;
}
const Loading = () => {
    return <p>Authentication in progress...</p>;
}
export function Profile() {
    const authRequest = {
        ...loginRequest
    };

    return (
        <MsalAuthenticationTemplate 
            interactionType={InteractionType.Redirect} 
            authenticationRequest={authRequest} 
            errorComponent={ErrorComponent} 
            loadingComponent={Loading}
        >
            <ProfileContent />
        </MsalAuthenticationTemplate>
      )
};