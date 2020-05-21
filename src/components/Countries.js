import React, { useState, useEffect, Fragment } from "react";
import CountriesGrid from "./CountriesGrid";
const Countries = () => {
  const [allCountries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("Africa");

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const checkTheValue = (e) => {
    setSelectedRegion(e.target.value);
  };

  const filterCountriesByRegion = (countries, region) => {
    return countries.filter((country) => country.region === region);
  };
  return (
    <Fragment>
      <select value={selectedRegion} onChange={checkTheValue}>
        <option>Filter by Region</option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
      <CountriesGrid
        countries={filterCountriesByRegion(allCountries, selectedRegion)}
      />
    </Fragment>
  );
};

export default Countries;
