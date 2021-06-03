import React from "react";

const Companies = ({ companies, changeCompany }) => {
  return (
    <React.Fragment>
      {companies.map((company, index) => {
        return (
          <div key={index}>
            <button onClick={() => changeCompany(company)}>{company}</button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Companies;
