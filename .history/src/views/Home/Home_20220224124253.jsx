import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import TodosContainer from "../../components/TodosContainer/TodosContainer";
const Home = ({}) => {
  return (
    <main>
      <NavBar />
      <TodosContainer />
    </main>
  );
};

export default Home;
