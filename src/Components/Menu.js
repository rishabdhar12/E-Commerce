import React from "react";

import "../Pages/Products/Products.css";

const Menu = ({ furnitureProducts }) => {
  return furnitureProducts.map((furniture) => {
    const { id, price, name, description, img1 } = furniture;
    return (
      <div key={id}>
        <img className="products-image" src={img1} alt="" />
        <div className="text">
          <p>{name}</p>
          <p>${price}</p>
        </div>
      </div>
    );
  });
};

export default Menu;
