import React, { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

import NavBar from "../../components/NavBar/NavBar";
import TodosContainer from "../../components/TodosContainer/TodosContainer";
const Home = ({}) => {
  const { authState } = useOktaAuth();
  useEffect(() => {
    console.log(authState.isAuthenticated);
    if (authState.isAuthenticated) return navigate("/");
  }, [authState.isAuthenticated]);
  return (
    <main>
      <NavBar />
      <TodosContainer />
    </main>
  );
};

export default Home;
