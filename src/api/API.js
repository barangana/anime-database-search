import React from "react";
import Axios from "axios";
import Main from "../components/layouts/Main";
import { useState, useEffect } from "react";
import TopAnime from "../components/TopAnime";

function API(props) {
  const [animeList, setAnimeList] = useState([]);
  const [error, setError] = useState("");
  const [topAnimes, setTopAnimes] = useState([]);

  // Gets the data from the Jikan API
  const getAnime = () => {
    const searchData = props.search;
    if (!searchData) {
      console.log("testing empty input");
      setError("Please enter a value.");
    } else {
      Axios.get(
        `https://api.jikan.moe/v3/search/anime?q=${searchData}page=1&limit=10`
      ).then((response) => {
        //console.log(response.data.results);
        setAnimeList(response.data.results);
      });
    }
  };

  // Calls the Jikan API and gest the top 10 upcoming animes.
  const getTopAnimes = () => {
    Axios.get(`https://api.jikan.moe/v3/top/anime/1/upcoming`).then(
      (response) => {
        console.log(response.data.top);
        //const data = response.data.top.splice(0, 10);
        //console.log(data);
        setTopAnimes(response.data.top);
      }
    );
  };

  // Loads the data from the top animes onto the component.
  useEffect(() => {
    getTopAnimes();
  }, []);

  // Generates a random number and randomly fetches an anime from the Jikan API based on its ID.
  const getRandomAnime = () => {
    const randomId = Math.floor(Math.random() * 10001);
    Axios.get(`https://api.jikan.moe/v3/anime/${randomId}`).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <button className="searchButton" onClick={getAnime}>
        get response
      </button>
      <button className="randomButton" onClick={getRandomAnime}>
        get random response
      </button>
      <TopAnime topAnimes={topAnimes} />
      <Main animeList={animeList} />
      {error && <h1>{error}</h1>}
    </div>
  );
}

export default API;
