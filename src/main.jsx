import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MyContext from "./store/MyContext"; 
import { BrowserRouter as Router } from "react-router-dom";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContext.Provider value={{}}>
      <Router>
        <App />
      </Router>
    </MyContext.Provider>
  </React.StrictMode>
);