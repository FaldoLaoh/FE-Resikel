import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./components/Theme/theme-provider"; // Adjust the path if needed
import "./index.css";
import logo from "./assets/Logo.png";

// Dynamically set favicon
const link = document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.href = logo;
document.head.appendChild(link);

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
