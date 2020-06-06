import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import CreatePoint from "./pages/CreatePoint";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreatePoint} path="/create-point" exact />
    </BrowserRouter>
  );
};

export default Router;
