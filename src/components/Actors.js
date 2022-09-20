import React from "react";
import Actor from "./Actor";
import { actors } from "../data";

function Actors() {
  const displayActors = actors.map((actor) => {
    return <Actor actor={actor} key={actor.name} />
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {displayActors}
    </div>
    );
}

export default Actors;
