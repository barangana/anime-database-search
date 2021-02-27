import React from "react";
import Axios from "axios";

function index() {
  const getAPI = () => {
    Axios.get("https://api.jikan.moe/v3").then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <button onClick={getAPI}>testing response</button>
    </div>
  );
}

export default index;
