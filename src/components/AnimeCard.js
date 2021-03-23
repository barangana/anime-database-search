import React, { useState } from "react";
import { Link } from "react-router-dom";
//import AnimePage from "../pages/AnimePage";

function AnimeCard({ anime }) {
  const [style, setStyle] = useState({ display: "none" });
  const [title, setTitle] = useState("");

  const handleClick = (e) => {
    console.log(anime);
    console.log(anime.title);
  };

  const handleHover = (e) => {
    //console.log(anime.title);
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
      <Link to={`/anime-info/${anime.mal_id}`}>
        <button className="button-in-image" style={style} onClick={handleClick}>
          Details
        </button>
      </Link>
      <h6 className="title-in-card">{title}</h6>
    </div>
  );
}

export default AnimeCard;
