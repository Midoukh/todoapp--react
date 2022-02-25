import React, { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { ToastContainer, toast } from "react-toastify";
import "./AuthForm.style.css";

const SignInForm = () => {
  const { oktaAuth } = useOktaAuth();
  const [sessionToken, setSessionToken] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const notify = (message) => toast(message);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    oktaAuth
      .signInWithCredentials({ username, password })
      .then((res) => {
        const sessionToken = res.sessionToken;
        setSessionToken(sessionToken);
        setLoading(false);
        // sessionToken is a one-use token, so make sure this is only called once
        oktaAuth.signInWithRedirect({ sessionToken });
      })
      .catch((err) => {
        notify("Something went wrong please try again");
        setLoading(false);
      });
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
        <button
          id="submit"
          type="submit"
          value="Submit"
          style={{
            opacity: loading ? ".4" : "1",
            cursor: loading && "not-allowed",
          }}
          disabled={loading}
        >
          {!loading ? "Continue" : "Loading..."}
        </button>
      </form>
      <ToastContainer type="error" />
    </main>
  );
};

export default SignInForm;
