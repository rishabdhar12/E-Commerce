import React from "react";

import "../../Pages/Products/Products.css";

const Categories = ({ categories, changeCategory }) => {
  return (
    <React.Fragment>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className="btn-category"
            onClick={() => changeCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </React.Fragment>
  );
};

export default Categories;
