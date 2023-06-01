import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { Row, Col } from 'react-bootstrap';

const API_URL = 'http://www.omdbapi.com?apikey=b91b1458';

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Response === 'True') {
      setMessage('') 
      setMovies(data.Search);
    } else {
      setMessage('No movies found') 
      setMovies([])
    };
    setSearchPerformed(true);
  }

  useEffect(() => {
    if (setSearchPerformed){
      searchMovies(search);
    }
  }, [search]);

  return (
    <div className="home">
      <h1>Directory</h1>

      <div class="input-group input-group-sm mb-3">
        <input
          class='form-control'
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div class='input-group-append'>
          <button 
            class='btn btn-outline-secondary' 
            type='button' 
            onClick={() => searchMovies(search)}> Search
          </button>
        </div>
      </div>

      <div className="container">
      {setSearchPerformed && search !== '' && message && <h2>{message}</h2>}
        <Row xs={1} sm={2} md={3} lg={4} xl={4} className="my-4">
          {movies && movies.map((movie) => (
          <Col key={movie.imdbID}>
            <MovieCard movie={movie} />
          </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export { Home };