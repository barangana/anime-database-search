import React from "react";
import AnimeCard from "../AnimeCard";

function Main(props) {
  return (
    <div>
      <h1>i am the main component</h1>
      {props.animeList.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
}

export default Main;
