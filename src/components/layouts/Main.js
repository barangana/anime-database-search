import React from "react";
import AnimeCard from "../AnimeCard";

function Main(props) {
  return (
    <div>
      <h2>i am the main component</h2>
      {props.animeList.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
}

export default Main;
