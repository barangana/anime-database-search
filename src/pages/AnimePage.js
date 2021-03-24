import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Axios from "axios";

function AnimePage() {
  const { animeId } = useParams();
  const [details, setDetails] = useState([]);

  // Gets the data from the API after the component has loaded.
  useEffect(() => {
    Axios.get(`https://api.jikan.moe/v3/anime/${animeId}`).then((response) => {
      console.log(response);
      setDetails(response.data);
    });
  }, []);

  return (
    <div className="anime-page-container">
      <div className="anime-page-info-container">
        <div className="anime-image-container">
          <img src={details.image_url} className="anime-page-image"></img>
          <div className="trailer-container">
            <ReactPlayer
              className="trailer"
              width="480px"
              height="315px"
              controls
              url={details.trailer_url}
            />
          </div>
        </div>
        <h1 className="anime-page-title">{details.title}</h1>
        <div>Synopsis: {details.synopsis}</div>
        <div>{details.status}</div>
      </div>
    </div>
  );
}

export default AnimePage;
