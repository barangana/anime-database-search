import React from "react";
import AnimeCard from "../AnimeCard";

function Main(props) {
  return (
    <div>
      <h1>i am the main component</h1>
      {props.animeList.map((anime) => (
        <AnimeCard
          title={anime.title}
          key={anime.mal_id}
          image={anime.image_url}
          episodes={anime.episodes}
          type={anime.type}
          description={anime.synopsis}
        />
      ))}
    </div>
  );
}

export default Main;
