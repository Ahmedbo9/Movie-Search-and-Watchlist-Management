import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/movies/movie_list'
import Header from './components/movies/header'
import SearchBar from './components/search_bar';

const App = () => {
  const [movies, setMovies] = useState([])

  const [searchValue, setSearchValue] = useState('')

  const getMovies = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e05621ed`
    const response = await fetch(url)
    const data = await response.json()
    if(data.Search){
      setMovies(data.Search);
    }
  }

  useEffect(() => {getMovies(searchValue);},[searchValue])


  return (
    <div className='container-fluid grid'>

    <div className='row d-flex align-item-center mt-4 mb-4'>
      <Header title ='Github videos'/>
      <SearchBar searchValue ={searchValue} setSearchValue = {setSearchValue}/>

    </div>

    <div className='row'>
      <MovieList movies={movies} />
    </div>
  </div>
  
  )
}

App.propTypes = {}

export default App
