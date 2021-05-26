import React from "react";

const Companies = ({ companies }) => {
    return (
        <select>
            {
                companies.map((company, index) => {
                    return (
                        <option value={company} key={index}>{company}</option>
                    )
                })
            }
        </select>
    );
};

export default Companies;
