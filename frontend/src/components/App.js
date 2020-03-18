import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./main/MainPage";


const App = () => (
  <Switch>
    <Route path="/" component={MainPage} />
  </Switch>
);

export default App;
