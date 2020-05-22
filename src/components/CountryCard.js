import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="each-card xl-col-3 lg-col-3 md-col-3 sm-col-12 col-12 ">
      <div>
        <img src={country.flag} alt="" />
      </div>
      <div>
        <p>{country.name}</p>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;
