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
  useEffect(() => {
    if (authState.isAuthenticated) return history.push("/dashboard");
  }, []);
  return authState.isAuthenticated ? <h1>Authenticated</h1> : <SignInForm />;
};

export default SignIn;
