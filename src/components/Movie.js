import React from "react";

function Movie({movie}){
    const {genres} = movie
    const genreList = genres.map((genre) => {
        return <li key={genre}>{genre}</li>
    })

    return (
        <div>
            <h2>Name: {movie.title}</h2>
            <p>Time: {movie.time}</p>
            <p>Genres:</p>
            <ul>{genreList}</ul>
        </div>
    )
}

export default Movie