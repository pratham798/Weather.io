import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import ShowWeather from "./ShowWeather";
import App from "./App";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Helmet>
      <title>Weather.io</title>
    </Helmet>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Show-Weather" element={<ShowWeather />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
