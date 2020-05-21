import React, { useState, useEffect } from "react";
import CountriesGrid from "./CountriesGrid";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <select></select>
      <CountriesGrid countries={countries} />
    </>
  );
};

export default Countries;
