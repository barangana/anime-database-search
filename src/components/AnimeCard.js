import React from "react";

function AnimeCard(props) {
  return (
    <div>
      <div id="anime-info">
        <h2>{props.title}</h2>
        <h3>episodes: {props.episodes}</h3>
        <h3>{props.type}</h3>
        <p>{props.description}</p>
      </div>
      <img src={props.image} alt={props.title} />
    </div>
  );
}

export default AnimeCard;
