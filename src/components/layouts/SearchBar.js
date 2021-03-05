import React from "react";
import { useState } from "react";
import API from "../../api/API";

function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        className="search-bar"
        type="search"
        placeholder="search for an anime"
        required
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <API search={search} />
    </div>
  );
}

export default SearchBar;
