import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return <CountryCard countries={countries} />;
};

export default Countries;
