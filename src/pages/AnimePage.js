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
    <div>
      {console.log("here")}
      <h1>i am the details anime page</h1>
      <h1>{details.title}</h1>
      <h6>{details.synopsis}</h6>
      <img src={details.image_url}></img>
      <ReactPlayer
        width="480px"
        height="240px"
        controls
        url={details.trailer_url}
      />
    </div>
  );
}

export default AnimePage;
