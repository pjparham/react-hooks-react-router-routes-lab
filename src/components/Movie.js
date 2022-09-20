import React from "react";

function Movie({movie}){
    const {genres} = movie
    console.log(genres)
    const genreList = genres.map((genre) => {
        return <li>{genre}</li>
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