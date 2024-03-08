import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => {
                return (
                    <div key={index}>
                        <img src={movie.Poster} alt="movie poster"/>
                    </div>
                )
            })}
        </>
    )
}

export default MovieList;

