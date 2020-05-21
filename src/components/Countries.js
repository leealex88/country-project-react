import React, { useState, useEffect, Fragment } from "react";
import CountriesGrid from "./CountriesGrid";
const Countries = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("Africa");
  const [counter, setCounter] = useState(0);

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
      <button onClick={() => setCounter(counter + 1)}>Add the count</button>
      <p>Current value {counter}</p>

      <select
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
      >
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
