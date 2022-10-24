import React, { useState, useEffect } from "react";
import { Route, useNavigate, Routes } from "react-router-dom";

// MSAL imports
import { EventType, NavigationClient } from "@azure/msal-browser";
import { MsalProvider, useMsal } from "@azure/msal-react";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Logout } from "./pages/Logout";

import { b2cPolicies } from "./authConfig";

function App({ pca }) {
  return (
    <ClientSideNavigation pca={pca}>
      <MsalProvider instance={pca}>
        <Pages />
      </MsalProvider>
    </ClientSideNavigation>
  );
}

/**
 *  This component is optional. This is how you configure MSAL to take advantage of the router's navigate functions when MSAL redirects between pages in your app
 */
class CustomNavigationClient extends NavigationClient {
  constructor(navigate) {
    super();
    this.navigate = navigate;
  }

  /**
   * Navigates to other pages within the same web application
   * You can use the useNavigate hook provided by react-router-dom to take advantage of client-side routing
   * @param url 
   * @param options 
   */
  async navigateInternal(url, options) {
    const relativePath = url.replace(window.location.origin, '');
    console.log(url)
    if (options.noHistory) {
      this.navigate(relativePath, { replace: true });
    } else {
      this.navigate(relativePath);
    }

    return false;
  }
}

function ClientSideNavigation({ pca, children }) {
  const navigate = useNavigate();
  const navigationClient = new CustomNavigationClient(navigate);
  pca.setNavigationClient(navigationClient);

  // react-router-dom v6 doesn't allow navigation on the first render - delay rendering of MsalProvider to get around this limitation
  const [firstRender, setFirstRender] = useState(true);
  useEffect(() => {
    setFirstRender(false);
  }, []);

  if (firstRender) {
    return null;
  }

  return children;
}

function Pages() {
  const { instance } = useMsal();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const callbackId = instance.addEventCallback((event) => {
      if ((event.eventType === EventType.LOGIN_SUCCESS || event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) && event.payload.account) {
        /**
         * For the purpose of setting an active account for UI update, we want to consider only the auth 
         * response resulting from SUSI flow. "tfp" claim in the id token tells us the policy (NOTE: legacy 
         * policies may use "acr" instead of "tfp"). To learn more about B2C tokens, visit:
         * https://docs.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview
         */
        if (event.payload.idTokenClaims['tfp'] === b2cPolicies.names.editProfile) {
          // retrieve the account from initial sing-in to the app
          const originalSignInAccount = instance.getAllAccounts()
            .find(account =>
              account.idTokenClaims.oid === event.payload.idTokenClaims.oid
              &&
              account.idTokenClaims.sub === event.payload.idTokenClaims.sub
              &&
              account.idTokenClaims['tfp'] === b2cPolicies.names.signUpSignIn
            );

          let signUpSignInFlowRequest = {
            authority: b2cPolicies.authorities.signUpSignIn.authority,
            account: originalSignInAccount
          };

          // silently login again with the signUpSignIn policy
          instance.ssoSilent(signUpSignInFlowRequest);
        }
      }

      if (event.eventType === EventType.SSO_SILENT_SUCCESS && event.payload.account) {
        setStatus("ssoSilent success");
      }
    });

    return () => {
      if (callbackId) {
        instance.removeEventCallback(callbackId);
      }
    }
    // eslint-disable-next-line  
  }, []);

  return (
    <Routes>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
      <Route path="/" element={<Home status={status} />}></Route>
    </Routes>
  )
}

export default App;