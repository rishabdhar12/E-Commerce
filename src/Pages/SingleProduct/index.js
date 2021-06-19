import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// data
import products from '../../data/data';

const SingleProduct = () => {

  console.log("Hello from single product");
  const [product, setProduct] = useState([]);
  const [amount, setAmount] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const newProduct = products.find((product) => product.id === id);
    setProduct(newProduct);
  }, []);

  const decreaseAmount = (e) => {
    e.preventDefault();
    if (e.target.value == 0) {
      console.log(e.target.value);
      setAmount(0);
      return;
    }
    setAmount(amount - 1);
    return;
  }

  const increaseAmount = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setAmount(amount + 1);
    return;
  }
  return (
    <div className="single-page-container" key={id}>
      {/* back to product page */}
      <Link to='/products' className='single-page-btn'>Back To Products</Link>
      {/* product name and price */}
      <div>
        <h1>{product.name}</h1>
        <h4>{product.price}</h4>
      </div>

      {/* images */}
      <div>
        <img src={product.img1} alt="" />
        <img src={product.img2} alt="" />
      </div>
      {/* description, availability, freeshiping, company name  */}
      <div>
        <p>{product.description}</p>
        <span>
          <p>Available:{
            product.available ? "In Stock" : "Not In Stock"
          }</p>
          <p>Shiping Charge: {
            product.freeshiping ? "Freeshiping" : "Shipping Charges apply"
          }</p>
          <p>Brand: {product.company}</p>
        </span>
      </div>
      {/* add items and amount button */}
      <div>
        <span>
          <button className='amount-btn' onClick={decreaseAmount}>-</button>
          <h2>{amount}</h2>
          <button className='amount-btn' onClick={increaseAmount}>+</button>
        </span>
        <span>
          <button className="single-page-btn">Add to cart</button>
        </span>

      </div>
    </div>
  );
}

export default SingleProduct;
