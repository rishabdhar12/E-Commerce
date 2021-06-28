import React from "react";
import { Link } from "react-router-dom";
import { MdRemoveShoppingCart } from "react-icons/md";
import "./cart.css";

import { CartProvider, useCart } from "react-use-cart";

const Cart = (props) => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <main className="page">
      <section className="cart-center">
        <div className="cp-header">
          <div className="cp-content">
            <h5>Item</h5>
            <h5>Price</h5>
            <h5>Quantity</h5>
            <h5>Subtotal</h5>
            <span></span>
          </div>
          <hr />
        </div>
        <article className="cp-item">
          {items.map((item, id) => {
            return (
              <div key={id}>
                <div className="title">
                  <img src={item.img1} alt="" />
                  <h5>{item.name}</h5>
                </div>
                <h5 className="cp-price">$ {item.price}</h5>
                <div className="cp-amount-button">
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <h2>{item.quantity}</h2>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <h5 className="subtotal">$ {item.quantity * item.price}</h5>
                <button
                  className="remove-button"
                  onClick={() => removeItem(item.id)}
                >
                  <MdRemoveShoppingCart />
                </button>
              </div>
            );
          })}
        </article>
        <hr />
        <div className="cp-link-container">
          <Link to="/products" className="link-button">
            Continue Shopping
          </Link>
          <button className="clr-btn" onClick={() => emptyCart()}>
            Clear Items
          </button>
        </div>
        <section className="cp-order-total">
          <div>
            <article>
              <div>
                <h5>
                  Subtotal: <span>{item.quantity * item.price}</span>
                </h5>
                <p>
                  Shipping Fee: <span>Free</span>
                </p>
                <hr />
                <h4>
                  Order total : <span>{item.quantity * item.price}</span>
                </h4>
              </div>
            </article>
            <button className="login-btn" type="submit">
              Login
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

function myCart() {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
}

export default myCart;
