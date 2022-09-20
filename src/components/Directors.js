import React from "react";
import Director from "./Director";
import { directors } from "../data";

function Directors() {
  const displayDirectors = directors.map((director) => {
    return <Director key={director.name} director={director}/>
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirectors}
    </div>
  );
}

export default Directors;
