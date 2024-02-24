import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App/App";
import "./index.css";
import { CssBaseline } from "@mui/material";
import { LoginProvider } from "./Login/context/LoginContext";
import { BrowserRouter, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <CssBaseline />
      <LoginProvider>
        <App />
      </LoginProvider>
    
  </React.StrictMode>
);
