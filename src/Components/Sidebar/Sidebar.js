import React from "react";
import products from "../../data/data";

import Categories from "./Categories";
import Companies from "./Companies";
import PriceSlider from "./PriceSlider";

import "../../Pages/Products/Products.css";

const categories = [
  "all",
  ...new Set(products.map((product) => product.category)),
];
const companies = [
  "all",
  ...new Set(products.map((product) => product.company)),
];

const minMaxPrice = [
  Math.min(...products.map((product) => product.price)),
  Math.max(...products.map((product) => product.price)) + 100
];

const Sidebar = ({
  changeCategory,
  changeCompany,
  changePriceRange,
  clearFilter,
}) => {
  return (
    <>
      <div className="form-control">
        <h3>Category</h3>
        <Categories categories={categories} changeCategory={changeCategory} />
      </div>

      <div className="form-control">
        <h3>Companies</h3>
        <Companies companies={companies} changeCompany={changeCompany} />
      </div>

      <div className="form-control">
        <h3>Price</h3>
        <PriceSlider minMaxPrice={minMaxPrice} changePriceRange={changePriceRange} />
      </div>
      <button className="clear-filter" onClick={clearFilter}>
        Clear Filter
      </button>
    </>
  );
};

export default Sidebar;
