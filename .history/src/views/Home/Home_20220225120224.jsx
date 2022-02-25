import React, { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import LocalStrge from "../../utils/localStorage";

import NavBar from "../../components/NavBar/NavBar";
import TodosContainer from "../../components/TodosContainer/TodosContainer";
const Home = ({}) => {
  const history = createBrowserHistory();
  const { authState } = useOktaAuth();
  const [sessionToken, setSessionToken] = useState(
    new LocalStrge().get("okta-token-storage")
  );
  const [userName] = useState(sessionToken.idToken.claims.name);

  if (!sessionToken) {
    return <Link to="/" />;
  }
  return (
    <main>
      <NavBar />
      <TodosContainer userName={userName} />
    </main>
  );
};

export default Home;
