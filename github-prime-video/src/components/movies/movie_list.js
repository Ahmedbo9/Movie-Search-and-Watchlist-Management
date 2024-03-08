import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => {
                return (
                    <div className='d-flex justify-content-start m-3' key={index}>
                        <img src={movie.Poster} alt="movie poster"/>
                    </div>
                )
            })}
        </>
    )
}

export default MovieList;

