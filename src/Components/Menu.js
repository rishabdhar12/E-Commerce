import React from "react";

import { Link } from 'react-router-dom';

import "../Pages/Products/Products.css";

const Menu = ({ furnitureProducts }) => {
  return furnitureProducts.map((furniture) => {
    const { id, price, name, img1 } = furniture;
    return (
      <div key={id}>
        <Link to={`product/${id}`}><img className="products-image" src={img1} alt="" /></Link>
        <div className="text">
          <p>{name}</p>
          <p>${price}</p>
        </div>
      </div>
    );
  });
};

export default Menu;
