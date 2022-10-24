import React from "react";
import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";

function ErrorComponent({error}) {
    return <p>An Error Occurred: {error}</p>;
}

function LoadingComponent() {
    return <p>Authentication in progress...</p>;
}

export function Example() {
    const authRequest = {
        scopes: ["openid", "profile"]
    };

    return (
        // authenticationRequest, errorComponent and loadingComponent props are optional
        <MsalAuthenticationTemplate 
            interactionType={InteractionType.Redirect} 
            authenticationRequest={authRequest} 
            errorComponent={ErrorComponent} 
            loadingComponent={LoadingComponent}
        >
            <p>At least one account is signed in!</p>
        </MsalAuthenticationTemplate>
      )
};