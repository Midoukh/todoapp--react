import React, { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import LocalStrge from "../../utils/localStorage";

import NavBar from "../../components/NavBar/NavBar";
import TodosContainer from "../../components/TodosContainer/TodosContainer";
import { useNavigate } from "react-router-dom";

const Home = ({}) => {
  const history = createBrowserHistory();
  const navigate = useNavigate();
  const { authState } = useOktaAuth();
  const [sessionToken, setSessionToken] = useState(
    new LocalStrge().get("okta-token-storage") || {}
  );
  console.log(sessionToken);
  if (Object.keys(sessionToken).length === 0) {
    console.log("no user");
    history.push("/");
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
