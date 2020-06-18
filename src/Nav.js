import React, { useContext } from "react";

import { MovieContext } from "./MovieContext";

import "./Nav.css";
const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="Nav">
      <h3>Ramesh Parajuli</h3>
      <p>List of Movies: {movies.length} </p>
    </div>
  );
};

export default Nav;
