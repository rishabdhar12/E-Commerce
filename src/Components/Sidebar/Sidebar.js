import React from 'react';
import products from '../../data/data';

import Categories from './Categories';
import Companies from './Companies';

import './Sidebar.css';

const getAllCategories = ['all', ...new Set(products.map((product) => product.category))];
const getAllCompanies = ['all', ...new Set(products.map((product) => product.company))];

const Sidebar = () => {
    const [furnitureProducts, setFurnitureProducts] = React.useState(products);
    const [categories, setCategories] = React.useState(getAllCategories);
    const [companies, setCompanies] = React.useState(getAllCompanies);

    return (
        <React.Fragment>
            <Categories categories={categories} />
            <Companies companies={companies} />
        </React.Fragment>
    )
}

export default Sidebar;
