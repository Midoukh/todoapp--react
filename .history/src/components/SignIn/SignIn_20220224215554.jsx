import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
import SignInForm from "../../views/AuthForm/AuthForm";
import { Navigate } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

const SignIn = () => {
  const { authState } = useOktaAuth();

  if (!authState) {
    return <div>Loading...</div>;
  }
  useState(() => {
    console.log(authState.isAuthenticated);
    if (authState.isAuthenticated) return Navigate("/");
  }, []);
  return authState.isAuthenticated ? (
    // <Redirect to={{ pathname: "/" }} />
    <h1>Authenticated</h1>
  ) : (
    <SignInForm />
  );
};

export default SignIn;
