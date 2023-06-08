import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./login";
import Google from "./Google";
import Facebook from "./Facebook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/redirect/google" element={<Google />} />
        <Route path="/redirect/facebook" element={<Facebook />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
