import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "react-use-cart";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <CartProvider>
      <App />
    </CartProvider>
  </Router>,
  document.getElementById("root")
);
