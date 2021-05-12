import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Nav from "./Nav";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Nav />
    <App />
  </StrictMode>,
  rootElement
);
