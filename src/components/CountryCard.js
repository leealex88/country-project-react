import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="each-card col-3">
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
