import React from "react";

function Director({director}){
    const movieList = director.movies.map((movie) => {
        return <li key={movie}>{movie}</li>
    })


    return (
        <div>
            <h2>{director.name}</h2>
            <p>Movies:</p>
            <ul>{movieList}</ul>
        </div>
    )
}

export default Director 