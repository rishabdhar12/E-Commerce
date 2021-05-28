import React from 'react';
import products from '../../data/data';

import Categories from './Categories';
import Companies from './Companies';
import PriceSlider from './PriceSlider';

import './Sidebar.css';

const getAllCategories = ['all', ...new Set(products.map((product) => product.category))];
const getAllCompanies = ['all', ...new Set(products.map((product) => product.company))];
const maxPrice = Math.max([products.map((product) => product.price)]);

const Sidebar = () => {
    const [furnitureProducts, setFurnitureProducts] = React.useState(products);
    const [categories, setCategories] = React.useState(getAllCategories);
    const [companies, setCompanies] = React.useState(getAllCompanies);

    return (
        <article className="Sidebar">
            <Categories categories={categories} />
            <Companies companies={companies} />
            <PriceSlider price={maxPrice} />
        </article>
    )
}

export default Sidebar;
