import React, { useEffect } from "react";
// import { Redirect } from "react-router-dom";
import SignInForm from "../../views/AuthForm/AuthForm";
import { useNavigate } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";


const SignIn = () => {
  const { authState } = useOktaAuth();
  const navigate = useNavigate();

  //   if (!authState) {
  //     return <div>Loading...</div>;
  //   }
  useEffect(() => {
    console.log(authState.isAuthenticated);
    if (authState.isAuthenticated) return navigate("/dashboard");
  }, [authState.isAuthenticated]);
  return authState.isAuthenticated ? (
    // <Redirect to={{ pathname: "/" }} />
    <h1>Authenticated</h1>
  ) : (
    <SignInForm />
  );
};

export default SignIn;
