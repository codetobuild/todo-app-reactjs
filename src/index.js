import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

export const Theme = createContext();
const theme = {
  bg: "#082032",
  todoCard: "#30475E",
  todoList: "#6D8299",
  doneList: "#304f66",
  button: "#1BDD80",
  text: "#fff",
};

ReactDOM.render(
  <React.StrictMode>
    <Theme.Provider value={theme}>
      <App />
    </Theme.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
