import React from "react";
import AlloCine from "../images/allocine.png";

const getImageUrl = path => {
  if (path) {
    return "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + path;
  } else {
    return AlloCine;
  }
};

const Card = props => {
  return (
    <div className="card">
      <img
        src={getImageUrl(props.movie.poster_path)}
        alt={props.movie.title}
        width="300"
        height="300"
      ></img>
      <div className="detail">
        <h2>{props.movie.title}</h2>
        <h3>{props.movie.release_date}</h3>
        <p className="descMovie">{props.movie.overview}</p>
      </div>
    </div>
  );
};

export default Card;
