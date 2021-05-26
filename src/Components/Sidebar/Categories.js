import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <React.Fragment>
            {
                categories.map((category, index) => {
                    return (
                        <Link key={index}>{category}</Link>
                    )
                })
            }
        </React.Fragment>
    )
}

export default Categories;
