import React, { Fragment, useState, useEffect } from "react";

function CountryBigCard() {
  //   const [countryName, setCountryName] = useState("Poland");

  //   const fetchAndRememberCountries = (name) => {
  //     fetch(`https://restcountries.eu/rest/v2/name/${name}`)
  //       .then((res) => res.json())
  //       .then((data) => setCountryName(data));
  //   };
  //   useEffect(fetchAndRememberCountries, []);

  return (
    <Fragment>
      <div className="xl-col-3 lg-col-3 md-col-3 sm-col-12 col-12">
        Big Card / single Country Information
      </div>
    </Fragment>
  );
}

export default CountryBigCard;
