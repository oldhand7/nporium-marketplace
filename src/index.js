import React from "react";
import ReactDOM from "react-dom/client";
import "assets/css/index.css";
import App from "./App";
import "./config/config";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer, toast } from "react-toastify";
import { CSSProperties } from "react";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
