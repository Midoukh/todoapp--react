import React, { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { createBrowserHistory } from "history";
import LocalStrge from "../../utils/localStorage";

import NavBar from "../../components/NavBar/NavBar";
import TodosContainer from "../../components/TodosContainer/TodosContainer";
import { useNavigate, Navigate } from "react-router-dom";

const Home = ({}) => {
  const history = createBrowserHistory();
  const navigate = useNavigate();
  const { authState } = useOktaAuth();
  const [sessionToken, setSessionToken] = useState(
    new LocalStrge().get("okta-token-storage") || {}
  );

  if (Object.keys(sessionToken).length === 0) {
    return <Navigate to="/" />;
  }
  const [userName] = useState(
    sessionToken === {} ? "" : sessionToken.idToken.claims.name
  );

  return (
    <main>
      <NavBar />
      <TodosContainer userName={userName} />
    </main>
  );
};

export default Home;
