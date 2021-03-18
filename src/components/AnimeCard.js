import React from "react";
import { useState } from "react";

function AnimeCard({ anime }) {
  const [style, setStyle] = useState({ display: "none" });
  const [title, setTitle] = useState("");
  const animeTitle = anime.title;

  const handleHover = (e) => {
    console.log(animeTitle);
    setStyle({ display: "block" });
    setTitle(animeTitle);
  };

  const handleLeave = (e) => {
    setStyle({ display: "none" });
    setTitle("");
  };

  const handleClick = (e) => {
    console.log(animeTitle);
  };

  return (
    <div
      className="content-anime"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div>
        <img src={anime.image_url}></img>
      </div>
      <button className="button-in-image" style={style} onClick={handleClick}>
        Details
      </button>
    </div>
  );
}

export default AnimeCard;
