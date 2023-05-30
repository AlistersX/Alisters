//home page - will render a search bar + list of movies using MovieCard.js
import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import FavoriteMovies from './FavoriteMovies';
import "../App.css"

const API_URL = 'http://www.omdbapi.com?apikey=b91b1458';

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log(data)
    console.log(data.Search)
    setMovies(data.Search)
  };

  useEffect(() => {
    searchMovies('harry potter') //need to change this to general movies
  }, []);

  return (<>
    <div className='home'>
      <h1>Movie List!</h1>
      <div className='search'>
        <input 
          placeholder='Search for movies'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          // src={SearchIcon}
          alt='search' 
          onClick={() => searchMovies(search)}
        />
      </div>
      {
        // if no movies length is greater than 0, we render each movie card, if it is empty we say no movies found
        movies?.length > 0 ? 
          (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
          
            ))}
          </div>
          ) : (
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
      )}
    </div>
  </>)
}

export {Home};