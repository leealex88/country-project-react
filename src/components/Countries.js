import React, { useState, useEffect, Fragment } from "react";
import CountriesGrid from "./CountriesGrid";
const Countries = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");

  const fetchAndRememberCountries = () => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((res) => res.json())
      .then((data) => setAllCountries(data));
  };
  useEffect(fetchAndRememberCountries, []);

  const filterCountriesByRegion = (countries, region) => {
    return countries.filter((country) => country.region === region);
  };
  return (
    <Fragment>
      <select
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
      >
        <option value="">Filter by Region</option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
      <CountriesGrid
        countries={
          selectedRegion === ""
            ? allCountries
            : filterCountriesByRegion(allCountries, selectedRegion)
        }
      />
    </Fragment>
  );
};

export default Countries;
