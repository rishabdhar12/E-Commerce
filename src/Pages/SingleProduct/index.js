import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// data
import products from '../../data/data';
import { useCart } from 'react-use-cart';

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
    <div className="single-page-container" key={id}>
      {/* back to product page */}
      <Link to='/products' className='single-page-btn'>Back To Products</Link>

      {/* images */}
      <section>
        <img src={product.img1} alt="" />
        <div className="Gallery">
          <img src={product.img1} alt="" />
          <img src={product.img2} alt="" />
        </div>
      </section>
      {/* description, availability, freeshiping, company name  */}
      <section className="content">
        {/* product name and price */}
        <div className="">
          <h2>{product.name}</h2>
          <h5>${product.price}</h5>
        </div>
        <p className="desc">{product.decription}</p>
        <p><span>Available:</span>
          {
            product.available ? "In Stock" : "Not In Stock"
          }
        </p>
        <p><span> Shiping Charge: </span>{
          product.freeshiping ? "Freeshiping" : "Shipping Charges apply"
        }</p>
        <p><span>Brand: </span>{product.company}</p>
      </section>
      {/* add items and amount button */}
      <div>
        <span>
          <button className='amount-btn' onClick={decreaseAmount}>-</button>
          <h2>{amount}</h2>
          <button className='amount-btn' onClick={increaseAmount}>+</button>
        </span>
        <span>
          <button className="single-page-btn" onClick={() => addItem(product, amount)}>Add to cart</button>
        </span>

      </div>
    </div>
  );
}

export default SingleProduct;
