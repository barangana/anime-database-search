import React from "react";
import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <div>
      <input
        type="search"
        placeholder="search for an anime"
        required
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button type="submit" onClick={handleSearch}>
        submit search
      </button>
    </div>
  );
}

export default SearchBar;
