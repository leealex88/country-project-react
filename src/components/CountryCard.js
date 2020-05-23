import React from "react";
import { Link } from "react-router-dom";
const CountryCard = ({ country }) => {
  return (
    <div className="xl-col-3 lg-col-3 md-col-3 sm-col-12 col-12">
      <Link className="link" to={`/country/${country.name}`}>
        <div className="each-card">
          <div className="card-flag-container">
            <img src={country.flag} alt="" />
          </div>
          <div className="card-info-container">
            <p className="country-name">
              <b>{country.name}</b>
            </p>
            <p>
              <b>Population:</b> {country.population.toLocaleString()}
            </p>
            <p>
              <b>Region:</b> {country.region}
            </p>
            <p>
              <b>Capital:</b> {country.capital}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
