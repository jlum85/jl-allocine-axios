import React from "react";
import Card from "./Card";

const Container = props => {
  const tab = props.movies;

  const elements = tab.map((item, index) => {
    return <Card key={index} movie={tab[index]}></Card>;
  });

  return <>{elements}</>;
};

export default Container;
