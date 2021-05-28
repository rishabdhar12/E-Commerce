import React from 'react';
import Sidebar from './Sidebar';

const Index = ({ changeCategory }) => {
    return (
        <React.Fragment>
            <Sidebar changeCategory={changeCategory} />
        </React.Fragment>
    )
}

export default Index
