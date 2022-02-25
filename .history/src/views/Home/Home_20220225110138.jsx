import React, { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import TodosContainer from "../../components/TodosContainer/TodosContainer";
const Home = ({}) => {
  const history = createBrowserHistory();
  const { authState } = useOktaAuth();
  if (!authState) {
    return <Link to="/" />;
  }
  return (
    <main>
      <NavBar />
      <TodosContainer />
    </main>
  );
};

export default Home;
