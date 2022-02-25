import React, { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

const SignIn = () => {
  const { authState } = useOktaAuth();

  if (!authState) {
    return <div>Loading...</div>;
  }
  if (authState) {
    if (authState.isAuthenticated) {
      return <Navigate to="/dashboard" />;
    }
  }
  return <Navigate to="/" />;
};

export default SignIn;
