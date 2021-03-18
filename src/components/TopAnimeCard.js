import React from "react";
import { useState } from "react";

function TopAnimeCard({ top }) {
  const [style, setStyle] = useState({ display: "none" });
  const [title, setTitle] = useState("");
  const animeTitle = top.title;

  const handleClick = (e) => {
    console.log(animeTitle);
  };

  const handleHover = (e) => {
    console.log(animeTitle);
    setStyle({ display: "block" });
    setTitle(animeTitle);
  };

  const handleLeave = (e) => {
    setStyle({ display: "none" });
    setTitle("");
  };

  return (
    <div
      className="content-anime"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="test">
        <img src={top.image_url} className="anime-image" alt="anime poster" />
      </div>
      <button className="button-in-image" style={style} onClick={handleClick}>
        Details
      </button>
    </div>
  );
}

export default TopAnimeCard;
