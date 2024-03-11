import React from 'react';
import Favourite from './favourite';

const MovieList = (props) => {
    const Favourite = props.favourite;
    return (
        <>
            {props.movies.map((movie, index) => {
                return (
                    <div className='image-container d-flex justify-content-start m-3' key={index}>
                        <img src={movie.Poster} alt="movie poster"/>
                        <div onClick={ () =>props.movieOnClick(movie) } className='overlay d-flex align-items-center justify-conten-center'>
                        <Favourite/>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default MovieList;

