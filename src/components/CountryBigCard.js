import React, { Fragment, useState, useEffect } from "react";

const CountryBigCard = (props) => {
  // const { object } = useParams();
  const country = props.location.state.country;
  console.log("name", country.name);
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default CountryBigCard;
