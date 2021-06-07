import React from 'react';
import Sidebar from './Sidebar';

const Index = ({ changeCategory, changeCompany }) => {
    return (
        <React.Fragment>
            <Sidebar changeCategory={changeCategory} changeCompany={changeCompany} />
        </React.Fragment>
    )
}

export default Index
