import React from "react";
import { Route, Routes } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { createBrowserHistory } from "history";
import AuthForm from "../../views/AuthForm/AuthForm";
import SignIn from "../SignIn/SignIn";
import Home from "../../views/Home/Home";

import { OKTA_CLIENT_ID } from "../../utils/constants";

const AppWithRouterAccess = () => {
  const history = createBrowserHistory();
  const onAuthRequired = () => {
    history.push("/login");
  };

  const oktaAuth = new OktaAuth({
    issuer: "https://${yourOktaDomain}/oauth2/default",
    clientId: OKTA_CLIENT_ID,
    redirectUri: window.location.origin + "/login/callback",
    onAuthRequired: onAuthRequired,
    pkce: true,
  });

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Routes>
        <Route path="/" exact={true} element={AuthForm} />
        <SecureRoute path="/dashboard" element={Home} />
        <Route path="/login" render={() => <SignIn />} />
        <Route path="/login/callback" element={LoginCallback} />
      </Routes>
    </Security>
  );
};
export default AppWithRouterAccess;
