import React from "react";
import Sidebar from "./Sidebar";

const Index = ({ changeCategory, changeCompany, changePriceRange, clearFilter }) => {

    return (
        <div>
            <Sidebar changeCategory={changeCategory}
                changeCompany={changeCompany}
                changePriceRange={changePriceRange}
                clearFilter={clearFilter} />
        </div>
    )
}

export default Index;
