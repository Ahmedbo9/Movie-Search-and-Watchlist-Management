import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/movies/movie_list'
const App = () => {
  const [movies, setMovies] = useState([])

  const [search, setSearch] = useState('')

  const getMovies = async () => {
    const response = await fetch('http://www.omdbapi.com/?s=naruto&apikey=e05621ed')
    const data = await response.json()
    setMovies(data.Search);
  }

  useEffect(() => {getMovies();},[])


  return (
    <div className='container-fluid grid'>
    <div className='row'>
      <MovieList movies={movies} />
    </div>
  </div>
  
  )
}

App.propTypes = {}

export default App
