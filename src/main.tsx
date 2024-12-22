import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx"; // WrappedApp 대신 App을 직접 가져옵니다.
import "./index.css";
import AppWithRouter from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>
);
