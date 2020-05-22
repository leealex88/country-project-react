// ToDo. What is the best name for this component? sugested: CountryControlAndGrid
import React, { useState, useEffect, Fragment } from "react";
import CountriesGrid from "./CountriesGrid";
import RegionSelect from "./RegionSelect";
import SearchInputByCountryName from "./SearchInputByCountryName";

const Countries = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [givenInput, setGivenInput] = useState("");

  const fetchAndRememberCountries = () => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((res) => res.json())
      .then((data) => setAllCountries(data));
  };
  useEffect(fetchAndRememberCountries, []);

  const filterCountriesByRegion = (countries, region) => {
    return countries.filter((country) => country.region === region);
  };

  const filterCountriesByTheInput = (countries, input) => {
    return countries.filter((country) =>
      country.name.toLowerCase().includes(input.toLowerCase())
    );
  };

  const countriesToShow =
    selectedRegion === ""
      ? allCountries
      : filterCountriesByRegion(allCountries, selectedRegion);

  const filteredCountriesToShow = givenInput
    ? filterCountriesByTheInput(allCountries, givenInput)
    : null;

  return (
    <Fragment>
      <div className="container search-select-container">
        <SearchInputByCountryName setGivenInput={setGivenInput} />
        <RegionSelect
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </div>
      {givenInput ? (
        <CountriesGrid countries={filteredCountriesToShow} />
      ) : (
        <CountriesGrid countries={countriesToShow} />
      )}
    </Fragment>
  );
};

export default Countries;
