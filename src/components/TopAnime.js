import React from "react";
import TopAnimeCard from "./TopAnimeCard";

function TopAnime(props) {
  return (
    <div className="">
      <h2>Top Upcoming Animes</h2>
      {props.topAnimes.map((top) => (
        <TopAnimeCard key={top.mal_id} top={top} />
      ))}
    </div>
  );
}

export default TopAnime;
