import React from "react";
import { Link, useHistory } from "react-router-dom";
const CountryCard = ({ country, isDark }) => {
  return (
    <div className="xl-col-3 lg-col-3 md-col-3 sm-col-12 col-12">
      <Link
        className="link"
        to={{
          pathname: `/countries/${country.alpha3Code}`,
          state: { country: country },
        }}
      >
        <div className={isDark ? "dark-mood" : "each-card"}>
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
