import React, { useEffect } from "react";
// import { Redirect } from "react-router-dom";
import SignInForm from "../../views/AuthForm/AuthForm";
import { createBrowserHistory } from "history";
import { useOktaAuth } from "@okta/okta-react";

const SignIn = () => {
  const { authState } = useOktaAuth();
  const history = createBrowserHistory();

  // if (!authState) {
  //   return <div>Loading...</div>;
  // }
  if (authState) {
    if (authState.isAuthenticated) {
      return <Navigate to="/dashboard" />;
    }
  }
  return <Navigate to="/" />;
};

export default SignIn;
