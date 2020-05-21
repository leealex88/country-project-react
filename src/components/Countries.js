import React, { useState, useEffect, Fragment } from "react";
import CountriesGrid from "./CountriesGrid";
import RegionSelect from "./RegionSelect";

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
      <RegionSelect
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
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
