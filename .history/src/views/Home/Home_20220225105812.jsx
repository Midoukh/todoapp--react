import React, { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { createBrowserHistory } from "history";

import NavBar from "../../components/NavBar/NavBar";
import TodosContainer from "../../components/TodosContainer/TodosContainer";
const Home = ({}) => {
  const history = createBrowserHistory();
  const { authState } = useOktaAuth();
  useEffect(() => {
    if (!authState) {
      history.push("/");
    }
  }, []);
  return (
    <main>
      <NavBar />
      <TodosContainer />
    </main>
  );
};

export default Home;
