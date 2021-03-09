import React from "react";

function AnimeCard(props) {
  return (
    <div>
      <div id="anime-info">
        <h3>{props.anime.title}</h3>
        <h3>Episodes: {props.anime.episodes}</h3>
      </div>
      <img src={props.anime.image_url}></img>
    </div>
  );
}

export default AnimeCard;
