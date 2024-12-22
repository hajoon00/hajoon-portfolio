import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppWithRouter from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>
);
