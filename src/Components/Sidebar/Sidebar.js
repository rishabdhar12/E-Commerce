import React from 'react';
import products from '../../data/data';

import Categories from './Categories';
import Companies from './Companies';
import PriceSlider from './PriceSlider';

import './Sidebar.css';

const categories = ['all', ...new Set(products.map((product) => product.category))];
const companies = ['all', ...new Set(products.map((product) => product.company))];
const maxPrice = Math.max([products.map((product) => product.price)]);

const Sidebar = ({ changeCategory, changeCompany }) => {
    return (
        <article className="Sidebar">
            <Categories categories={categories} changeCategory={changeCategory} />

            <Companies companies={companies} changeCompany={changeCompany} />
            <PriceSlider price={maxPrice} />
        </article>
    )
}

export default Sidebar;
