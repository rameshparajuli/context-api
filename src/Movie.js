import React from "react";

const Movie = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h6> ${price} </h6>
    </div>
  );
};

export default Movie;
