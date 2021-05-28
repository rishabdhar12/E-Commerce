import React from "react";
import Sidebar from '../Components/Sidebar';
import products from '../data/data';
import Menu from '../Components/Menu';

const Products = () => {
  const [furnitureProducts, setFurnitureProducts] = React.useState(products);
  const changeCategory = (category) => {
    console.log(category);
    if (category === 'all') {
      setFurnitureProducts(products);
      return;
    }
    const newProducts = products.filter((product) => product.category === category);
    setFurnitureProducts(newProducts);
    return;
  }

  // const changeCompany = (company) => {
  //   console.log(company);
  //   if (company === 'all') {
  //     setFurnitureProducts(products);
  //     return;
  //   }
  //   const newProducts = products.filter((product) => product.company === company);
  //   setFurnitureProducts(newProducts);
  //   return;
  // }


  return (
    <React.Fragment>
      <Sidebar changeCategory={changeCategory} />
      <Menu furnitureProducts={furnitureProducts} />
    </React.Fragment>
  );
};

export default Products;
