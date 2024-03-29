import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/movies/movie_list'
import Header from './components/movies/header'
import SearchBar from './components/search_bar';
import Favourite from './components/movies/favourite';
import RemoveFavourite from './components/movies/remove_favourite';

const App = () => {
  const [movies, setMovies] = useState([
    {
      "Title": "Star Wars: Episode IV - A New Hope",
      "Year": "1977",
      "imdbID": "tt0076759",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode V - The Empire Strikes Back",
      "Year": "1980",
      "imdbID": "tt0080684",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode VI - Return of the Jedi",
      "Year": "1983",
      "imdbID": "tt0086190",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode VII - The Force Awakens",
      "Year": "2015",
      "imdbID": "tt2488496",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode I - The Phantom Menace",
      "Year": "1999",
      "imdbID": "tt0120915",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode III - Revenge of the Sith",
      "Year": "2005",
      "imdbID": "tt0121766",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode II - Attack of the Clones",
      "Year": "2002",
      "imdbID": "tt0121765",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
  },
  {
      "Title": "Rogue One: A Star Wars Story",
      "Year": "2016",
      "imdbID": "tt3748528",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode VIII - The Last Jedi",
      "Year": "2017",
      "imdbID": "tt2527336",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
  },
  {
      "Title": "Star Trek",
      "Year": "2009",
      "imdbID": "tt0796366",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg"
  }
  ])
  const [searchValue, setSearchValue] = useState('')
  const [toWatchList, setToWatchList] = useState([])

  const getMovies = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e05621ed`
    const response = await fetch(url)
    const data = await response.json()
    if(data.Search){
      setMovies(data.Search);
    }
  }

  useEffect(() => {getMovies(searchValue);},[searchValue])
  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('watchList'));
    if (movies) {
      setToWatchList(movies);
    }
  
  })


  const storeToLocalStorage = (movies) => {
    localStorage.setItem('watchList', JSON.stringify(movies));

   }

  const addToWatchList = (movie) => {
    if (toWatchList.includes(movie)) return;
    const newWatchList = [...toWatchList, movie];
    setToWatchList(newWatchList);
    storeToLocalStorage(newWatchList);
  }

  const removeFromWatchList = (movie) => {
    const newWatchList = toWatchList.filter((elem) => elem.imdbID !== movie.imdbID);
    setToWatchList(newWatchList);
    storeToLocalStorage(newWatchList);
  }


  return (
    <div className='container-fluid grid'>

    <div className='row d-flex align-item-center mt-4 mb-4'>
      <Header title ='Github videos'/>
      <SearchBar searchValue ={searchValue} setSearchValue = {setSearchValue}/>

    </div>

    <div className='row'>
      <MovieList movies={movies} movieOnClick ={addToWatchList} favourite = {Favourite} />
    </div>


    <div className='row d-flex align-item-center mt-4 mb-4'>
      <Header title ='To watch later'/>
    </div>

    <div className='row'>
      <MovieList movies={toWatchList} movieOnClick ={removeFromWatchList} favourite = {RemoveFavourite} />
    </div>

  </div>

  
  
  )
}

App.propTypes = {}

export default App
