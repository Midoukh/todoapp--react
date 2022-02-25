import React, { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";

import "./AuthForm.style.css";

const SignInForm = () => {
  const { oktaAuth } = useOktaAuth();
  const [sessionToken, setSessionToken] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    oktaAuth
      .signInWithCredentials({ username, password })
      .then((res) => {
        const sessionToken = res.sessionToken;
        setSessionToken(sessionToken);
        localStorage.setItem("oktatoken", JSON.stringify(sessionToken));
        // sessionToken is a one-use token, so make sure this is only called once
        oktaAuth.signInWithRedirect({ sessionToken });
      })
      .catch((err) => console.log("Found an error", err));
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  if (sessionToken) {
    // Hide form while sessionToken is converted into id/access tokens
    return null;
  }

  return (
    <main className="form--container">
      <div>
        <h1>Sign In with your Username</h1>
      </div>
      <form onSubmit={handleSubmit} className="form--form">
        <label>
          <span>Username:</span>
          <input
            id="username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button id="submit" type="submit" value="Submit">
          Continue
        </button>
      </form>
    </main>
  );
};

export default SignInForm;
