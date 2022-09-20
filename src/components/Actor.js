import React from "react";

function Actor({actor}){

    const displayMovies = actor.movies.map((movie) => {
        return <li key={movie}>{movie}</li>
    })
    return (
        <div>
            <h2>Name: {actor.name}</h2>
            <p>Movies:</p>
            <ul>{displayMovies}</ul>
        </div>
    )
}

export default Actor