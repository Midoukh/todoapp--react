import React from "react";
import "./App.css";
import Home from "./views/Home/Home";
import { SecureRoute, Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import { OKTA_CLIENT_ID } from "./utils/constants";

const oktaAuth = new OktaAuth({
  issuer: `https://{yourOktaDomain}.com/oauth2/default`,
  clientId: OKTA_CLIENT_ID,
  redirectUri: window.location.origin + "/login/callback",
});
const App = () => {
  const history = useNavigate();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    // history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
    history;
  };

  return (
    <Router>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        {/* <Route path='/' exact={true} component={Home} /> */}
        <SecureRoute path="/dashboard" component={Home} />
        <Route path="/" component={LoginCallback} />
      </Security>
    </Router>
  );
};

export default App;
