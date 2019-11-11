import React from "react";

const CatMovie = props => {
  return (
    <div className="headerBar">
      <span
        className={props.cat === 0 ? "activeMenu" : ""}
        onClick={() => props.onClickBar(0)}
      >
        Popular Movies
      </span>
      <span
        className={props.cat === 1 ? "activeMenu" : ""}
        onClick={() => props.onClickBar(1)}
      >
        Upcoming Movies
      </span>
      <span
        className={props.cat === 2 ? "activeMenu" : ""}
        onClick={() => props.onClickBar(2)}
      >
        Top Rated Movies
      </span>
    </div>
  );
};

export default CatMovie;
