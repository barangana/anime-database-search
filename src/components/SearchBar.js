import React from "react";
import { useState } from "react";
import API from "../api/API";

function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1>{search}</h1>
      <input
        type="search"
        placeholder="search for an anime"
        required
        onChange={(e) => setSearch(e.target.value)}
      />
      <API search={search} />
    </div>
  );
}

export default SearchBar;
