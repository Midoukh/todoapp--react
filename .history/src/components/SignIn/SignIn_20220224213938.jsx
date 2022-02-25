import React from "react";
// import { Redirect } from "react-router-dom";
import SignInForm from "../../views/AuthForm/AuthForm";
import { useOktaAuth } from "@okta/okta-react";

const SignIn = () => {
  const { authState } = useOktaAuth();

  if (!authState) {
    return <div>Loading...</div>;
  }
  return authState.isAuthenticated ? (
    // <Redirect to={{ pathname: "/" }} />
    <h1>Authenticated</h1>
  ) : (
    <SignInForm />
  );
};

export default SignIn;
