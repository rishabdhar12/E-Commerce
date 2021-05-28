import React from "react";

const Companies = ({ companies, changeCompany }) => {
    return (
        <select onChange={() => changeCompany}>
            {
                companies.map((company, index) => {
                    return (
                        <option key={index} value={company}>{company}</option>
                    )
                })
            }
        </select>
    );
};

export default Companies;
