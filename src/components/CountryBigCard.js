import React, { Fragment, Link } from "react";

const CountryBigCard = (props) => {
  // const { object } = useParams();
  const country = props.location.state.country;
  console.log("name", country);
  return (
    <Fragment>
      <div className="each-card">
        <div className="big-card-flag">
          <img src={country.flag} alt="" className="big-card-flag-image" />
        </div>
        <div className="card-info-container">
          <p className="country-name">
            <b>{country.name}</b>
          </p>
          <p>
            <b>Native Name:</b> {country.nativeName}
          </p>
          <p>
            <b>Population:</b> {country.population.toLocaleString()}
          </p>
          <p>
            <b>Region:</b> {country.region}
          </p>
          <p>
            <b>Seb Region:</b> {country.subregion}
          </p>
          <p>
            <b>Capital:</b> {country.capital}
          </p>
        </div>
        <div>
          <p>
            <b>Top evel Domain:</b> {country.topLevelDomain}
          </p>
          <p>
            <b>Currencies:</b> {country.currencies[0].name}
          </p>
          <div>
            <b>Languages:</b>{" "}
            {country.languages.map((country, index) => (
              <p key={index}>{country.name}</p>
            ))}
          </div>

          <div>
            <b>Border Countries:</b>{" "}
            {country.borders.map((country, index) =>
              country.length === 0 ? (
                <div>No borders</div>
              ) : (
                <button key={index}>{country}</button>
              )
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CountryBigCard;
