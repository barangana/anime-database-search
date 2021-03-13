import React from "react";
import TopAnimeCard from "./TopAnimeCard";

function TopAnime(props) {
  return (
    <div>
      <h4>i am the top upcoming animes component</h4>
      {props.topAnimes.map((top) => (
        <TopAnimeCard key={top.mal_id} top={top} />
      ))}
    </div>
  );
}

export default TopAnime;
