import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/styles.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
