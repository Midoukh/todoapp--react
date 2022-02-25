import React from "react";
import { SecureRoute, Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Route, BrowserRouter, useNavigate } from "react-router-dom";
import { OKTA_CLIENT_ID } from "./utils/constants";

import "./App.css";
import Home from "./views/Home/Home";

const oktaAuth = new OktaAuth({
  issuer: `https://{yourOktaDomain}.com/oauth2/default`,
  clientId: OKTA_CLIENT_ID,
  redirectUri: window.location.origin + "/login/callback",
});
const Auth = () => {
  const history = useNavigate();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    // history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      {/* <Route path='/' exact={true} component={Home} /> */}
      <SecureRoute path="/dashboard" component={Home} />
      <Route path="/" component={LoginCallback} />
    </Security>
  );
};

const withRouter = () => (
  <BrowserRouter>
    <Auth />;
  </BrowserRouter>
);

export default withRouter;
