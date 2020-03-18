import React from "react";
import ReactDOM from "react-dom";

// We will create this component shortly
import Root from "./components/Root";

// We set this up in the last section
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore({});
  // Render our root component and pass in the store as a prop
  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store} />, root);
});
