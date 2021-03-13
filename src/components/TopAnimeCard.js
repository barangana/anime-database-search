import React from "react";

function TopAnimeCard({ top }) {
  return (
    <div>
      <h4>{top.title}</h4>
      <img src={top.image_url}></img>
    </div>
  );
}

export default TopAnimeCard;
