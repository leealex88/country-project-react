import React from "react";

const RegionSelect = ({ selectedRegion, setSelectedRegion }) => {
  return (
    <select
      className="select-region"
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
  );
};

export default RegionSelect;
