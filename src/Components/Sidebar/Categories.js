import React from "react";
import { Link } from "react-router-dom";

import "../../Pages/Products/Products.css";

const Categories = ({ categories, changeCategory }) => {
  return (
    <React.Fragment>
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <button
              type="button"
              className="btn-category"
              onClick={() => changeCategory(category)}
            >
              {category}
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Categories;
