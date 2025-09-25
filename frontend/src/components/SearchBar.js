import React from "react";
import "../styles.css";

const SearchBar = ({ search, setSearch }) => (
  <input
    type="text"
    placeholder="Search by customer or car..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{ padding: "8px", width: "100%", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "15px" }}
  />
);

export default SearchBar;
