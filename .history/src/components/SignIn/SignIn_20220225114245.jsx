import React, { useEffect } from "react";
// import { Redirect } from "react-router-dom";
import SignInForm from "../../views/AuthForm/AuthForm";
import { createBrowserHistory } from "history";
import { useOktaAuth } from "@okta/okta-react";

const SignIn = () => {
  const { authState } = useOktaAuth();
  const history = createBrowserHistory();

  if (!authState) {
    return <div>Loading...</div>;
  }

  return authState.isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/" />
  );
};

export default SignIn;
