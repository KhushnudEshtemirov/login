import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./login";
import Redirect from "./redirect";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        {/* <Route path="/api/oauth/google" element={<Redirect />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
