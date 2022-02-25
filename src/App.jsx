import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppWithRouterAccess from "./components/AppWithRouterAccess/AppWithRouterAccess";

const App = () => {
  return (
    <BrowserRouter>
      <AppWithRouterAccess />
    </BrowserRouter>
  );
};

export default App;
