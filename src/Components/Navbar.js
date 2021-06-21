import React from "react";

import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsPersonPlusFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src="/Images/navbar-logo.svg" alt="" />
            </Link>
          </div>
          <ul className="nav-links">
            <li className="nav-link-items">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="nav-link-items">
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li className="nav-link-items">
              <Link to="/products" className="link">
                Products
              </Link>
            </li>
          </ul>
          <div className="nav-left">
            <div className="nav-cart">
              <Link to="/cart" className="link-cart">
                Cart
                <span>
                  <FaShoppingCart />
                </span>
              </Link>
            </div>
            <div className="nav-login">
              Login
              <span>
                <BsPersonPlusFill />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
