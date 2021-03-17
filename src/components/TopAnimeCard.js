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

  //TODO: Fix Button to show on hover of the image by making each image a component
  return (
    <div className="content-anime">
      <div>
        <img
          src={top.image_url}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className="anime-image"
          alt="anime poster"
        ></img>
        <button className="button-in-image" style={style}>
          Details
        </button>
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default TopAnimeCard;
