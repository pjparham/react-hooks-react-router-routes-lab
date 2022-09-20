import React from "react";
import Movie from "./Movie";
import { movies } from "../data";

function Movies() {
  const displayMovies = movies.map((movie) => {
    return <Movie movie={movie} />
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies}
    </div>
  );
}

export default Movies;
