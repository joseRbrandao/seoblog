import React from "react";
import ReactDOM from "react-dom";
import Rotas from "./Pages/root";
import { GlobalStyle } from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <Rotas />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
