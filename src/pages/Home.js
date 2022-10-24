import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { Link as RouterLink } from "react-router-dom";


export function Home(props) {
    const { instance } = useMsal();

    return (
        <>
            <AuthenticatedTemplate>
                {props.status}
                <br/>
                <RouterLink to="/profile">Call Hello API</RouterLink>
                <br/>
                <pre>{instance.getActiveAccount() ? JSON.stringify(instance.getActiveAccount().idTokenClaims) : null}</pre>
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                Please sign-in to see your profile information.
            </UnauthenticatedTemplate>
        </>
    );
}