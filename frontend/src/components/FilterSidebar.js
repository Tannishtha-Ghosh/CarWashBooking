import React, { useState } from "react";

const FilterSidebar = ({ onFilter }) => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const handleFilter = () => {
    onFilter({ make, model, year });
  };

  const handleReset = () => {
    setMake("");
    setModel("");
    setYear("");
    onFilter({ make: "", model: "", year: "" });
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <h3>Filters</h3>
      <input
        type="text"
        placeholder="Car Make"
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />
      <input
        type="text"
        placeholder="Car Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={handleFilter}>Apply</button>
      <button onClick={handleReset} style={{ marginTop: "5px" }}>
        Reset
      </button>
    </div>
  );
};

export default FilterSidebar;
