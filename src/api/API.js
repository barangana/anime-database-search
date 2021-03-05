import React from "react";
import Axios from "axios";
import Main from "../components/layouts/Main";
import { useState } from "react";

function API(props) {
  const [animeList, setAnimeList] = useState([]);

  // Gets the data from the Jikan API
  const getAnime = () => {
    const searchData = props.search;
    console.log(searchData);
    Axios.get(
      `https://api.jikan.moe/v3/search/anime?q=${searchData}page=1&limit=10`
    ).then((response) => {
      console.log(response.data.results);
      setAnimeList(response.data.results);
    });
  };

  return (
    <div>
      <button onClick={getAnime}>get response</button>
      <Main animeList={animeList} />
    </div>
  );
}

export default API;
