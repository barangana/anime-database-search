import React from "react";

function AnimeCard(props) {
  return (
    <div className="content-anime">
      <div>
        <img src={props.anime.image_url}></img>
      </div>
    </div>
  );
}

export default AnimeCard;
