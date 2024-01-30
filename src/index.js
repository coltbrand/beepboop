import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as com from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <com.Router></com.Router>
  </React.StrictMode>
);
