import { useState, useEffect } from 'react'
import './App.css'
import searchIcon from './search.svg'
//53facba2

import MovieCard from './MovieCard'

const API_URL = 'http://www.omdbapi.com?apikey=53facba2'

const movie1 = {
  "Title": "The Perfect Pitch",
  "Year": "2002",
  "imdbID": "tt0344197",
  "Type": "movie",
  "Poster": "N/A"
}

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies =  async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  // useEffect(() => {
  //   searchMovies('Pitch Perfect')
  // }, [])

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0
          ? (
              <div className='container'>
                {movies.map((movie) => (
                  <MovieCard movie={movie}/>
                ))}
              </div>
            ) :
            (
              <div className='empty'>
                <h2>No movies found</h2>
              </div>
            )
      }



    </div>


  )
}

export default App
