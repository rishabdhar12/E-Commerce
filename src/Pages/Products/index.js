import React from "react";
import Sidebar from "../../Components/Sidebar";
import products from "../../data/data";
import Menu from "../../Components/Menu";

//css
import "./Products.css";

const ACTION = {
  change_category: 'change_category',
  change_company: 'change_company',
  change_price_range: 'change_price_range',
  clear_filter: 'clear_filter'
}

const reducer = (state, action) => {
  if (action.type === ACTION.change_category) {
    console.log(action.payload);
    if (action.payload === 'all') {
      return products
    }
    return products.filter((product) => product.category === action.payload)
  }

  if (action.type === ACTION.change_company) {
    console.log(action.payload);
    if (action.payload === 'all') {
      return products;
    }
    return products.filter((product) => product.company === action.payload)
  }

  if (action.type === ACTION.change_price_range) {
    return products.filter((product) => product.price <= action.payload)
  }

  if (action.type === ACTION.clear_filter) {
    return products
  }

}


const Products = () => {

  const [state, dispatch] = React.useReducer(reducer, products);

  const changeCategory = (categorySelected) => {
    dispatch({ type: ACTION.change_category, payload: categorySelected });
  }

  const changeCompany = (e) => {
    let companySelected = e.target.value
    dispatch({ type: ACTION.change_company, payload: companySelected });
  }

  const changePriceRange = (priceRangeSelected) => {
    console.log(priceRangeSelected);
    dispatch({ type: ACTION.change_price_range, payload: priceRangeSelected });
  }
  const clearFilter = () => {
    dispatch({ type: ACTION.clear_filter });
  }

  return (
    <main>
      <Sidebar changeCategory={changeCategory}
        changeCompany={changeCompany}
        changePriceRange={changePriceRange}
        clearFilter={clearFilter} />

      <Menu furnitureProducts={state} />
    </main>
  );
};

export default Products;
