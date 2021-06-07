import React from "react";
import Sidebar from '../Components/Sidebar';
import products from '../data/data';
import Menu from '../Components/Menu';


const ACTION = {
  change_category: 'change_category',
  change_company: 'change_company'
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


  return (
    <React.Fragment>
      <Sidebar changeCategory={changeCategory} changeCompany={changeCompany} />
      <Menu furnitureProducts={state} />
    </React.Fragment>
  );
};

export default Products;
