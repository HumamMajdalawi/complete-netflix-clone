import React from "react";
import { render } from "react-dom";
import App from "./App";
import "normalize.css";
import { GlobalStyles } from "./global-styles";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <>
    <GlobalStyles />
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById("root")
);
