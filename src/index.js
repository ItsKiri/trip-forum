import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import RecommendationPage from "./pages/RecommendationPage";
import BlogPage from "./pages/BlogPage";
import HelpPage from "./pages/HelpPage";
import FellowPage from "./pages/FellowPage";
import AboutPage from "./pages/AboutPage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route
          path="/recommendationpage"
          element={<RecommendationPage />}
        ></Route>
        <Route path="/blogpage" element={<BlogPage />}></Route>
        <Route path="/helppage" element={<HelpPage />}></Route>
        <Route path="/fellowpage" element={<FellowPage />}></Route>
        <Route path="/aboutpage" element={<AboutPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
