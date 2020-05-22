import React from "react";

function searchInputByCountryName({ setGivenInput }) {
  return (
    <input
      className="search-input"
      placeholder="Search for a country"
      onChange={(e) => setGivenInput(e.target.value)}
    ></input>
  );
}

export default searchInputByCountryName;
