import React, { useState } from "react";

function AnimeCard({ anime }) {
  const [style, setStyle] = useState({ display: "none" });
  const [title, setTitle] = useState("");

  const handleClick = (e) => {
    console.log(anime.title);
  };

  const handleHover = (e) => {
    console.log(anime.title);
    setStyle({ display: "block" });
    setTitle(anime.title);
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
        <img src={anime.image_url} className="anime-image" alt="anime poster" />
      </div>
      <button className="button-in-image" style={style} onClick={handleClick}>
        Details
      </button>
    </div>
  );
}

export default AnimeCard;
