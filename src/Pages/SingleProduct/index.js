import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// data
import products from '../../data/data';
import { useCart } from 'react-use-cart';

//css
import './single_product.css';

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const [amount, setAmount] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const newProduct = products.find((product) => product.id === id);
    setProduct(newProduct);
  }, []);

  // add to cart

  const { addItem } = useCart();

  const decreaseAmount = (e) => {
    e.preventDefault();
    if (amount === 0) {
      setAmount(0);
      return;
    }
    setAmount(amount - 1);
    return;
  }

  const increaseAmount = (e) => {
    e.preventDefault();
    setAmount(amount + 1);
    return;
  }
  return (
    <main>
      <div className="sp-container page" key={id}>

        {/* back to product page */}
        <Link to='/products' className='sp-btn'>Back To Products</Link>

        <article className="sp-center">

          {/* images */}
          <section className="sp-img">
            <img className="hero-img" src={product.img1} alt="" />
            <div className="gallery">
              <img src={product.img1} alt="" />
              <img src={product.img2} alt="" />
            </div>
          </section>

          {/* product details and buttons*/}
          <section className="content">
            <h2>{product.name}</h2>
            <h5 className="price">${product.price}</h5>
            <p className="desc">{product.decription}</p>
            <p className="info"><span>Available:</span>
              {
                product.available ? "In Stock" : "Not In Stock"
              }
            </p>
            <p className="info"><span> Shiping Charge: </span>{
              product.freeshiping ? "Freeshiping" : "Shipping Charges apply"
            }</p>
            <p className="info"><span>Brand: </span>{product.company}</p>
            <hr />
            {/* add items and amount button */}
            <div className="sp-cart-btn-container">

              <span className="amount-btn">
                <button onClick={decreaseAmount}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></button>
                <h2>{amount}</h2>
                <button onClick={increaseAmount}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg></button>
              </span>

              <span>
                <button className="sp-btn" onClick={() => addItem(product, amount)}>Add to cart</button>
              </span>

            </div>
          </section>

        </article>
      </div>
    </main>
  );
}

export default SingleProduct;
