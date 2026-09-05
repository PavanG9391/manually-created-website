import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// The app is starting from the root node and rendering the site shell.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
