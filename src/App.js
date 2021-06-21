import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/:id" component={SingleProduct} />
        <Route exact path="/cart" component={Cart} />
        <Route exact component={Error} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
