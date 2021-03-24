import React, { useState, useEffect } from "react";
import Axios from "axios";
import AnimeCard from "../components/AnimeCard";

const Index = () => {
  const [animeList, setAnimeList] = useState([]);
  const [error, setError] = useState("");
  const [topAnimes, setTopAnimes] = useState([]);
  const [search, setSearch] = useState("");

  // Gets the data from the Jikan API
  const getAnime = () => {
    if (!search) {
      console.log("testing empty input");
      setError("Please enter a value.");
    } else {
      Axios.get(
        `https://api.jikan.moe/v3/search/anime?q=${search}page=1&limit=20`
      ).then((response) => {
        //console.log(response.data.results);
        setAnimeList(response.data.results);
      });
    }
  };

  // Calls the Jikan API and gets the top 10 upcoming animes.
  const getTopAnimes = () => {
    Axios.get(`https://api.jikan.moe/v3/top/anime/1/upcoming`).then(
      (response) => {
        //console.log(response.data.top);
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
  };

  // Checks if the "Enter" button has been pressed and then calls the getAnime function.
  const enterPress = (e) => {
    if (e.keyCode === 13) {
      console.log(search);
      getAnime();
    }
  };

  return (
    <div>
      <input
        className="search-bar"
        type="search"
        placeholder="search for an anime"
        required
        value={search}
        onKeyDown={enterPress}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <button className="searchButton" onClick={getAnime}>
          get response
        </button>
        <button className="randomButton" onClick={getRandomAnime}>
          get random response
        </button>
        {error && <h1>{error}</h1>}
      </div>
      <div>
        <h2>i am the main component</h2>
        {animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
      <div>
        <h2>Top Upcoming Animes</h2>
        {topAnimes.map((topAnime) => (
          <AnimeCard key={topAnime.mal_id} anime={topAnime} />
        ))}
      </div>
    </div>
  );
};

export default Index;
