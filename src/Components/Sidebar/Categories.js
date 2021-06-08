import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ categories, changeCategory }) => {
  return (
    <React.Fragment>
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <button onClick={() => changeCategory(category)}>{category}</button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Categories;
