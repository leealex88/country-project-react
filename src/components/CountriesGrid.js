import React from "react";

import "../grid.css";
import CountryCard from "./CountryCard";
const CountriesGrid = ({ countries, isDark }) => {
  return (
    <div className="container">
      <div className="row">
        {countries.map((country, index) => (
          <CountryCard country={country} key={index} isDark={isDark} />
        ))}
      </div>
    </div>
  );
};

export default CountriesGrid;
