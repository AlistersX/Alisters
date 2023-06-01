import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { Row, Col } from 'react-bootstrap';

const API_URL = 'http://www.omdbapi.com?apikey=b91b1458';

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('harry potter'); // Change this to search for general movies
  }, []);

  return (
    <div className="home">
      <h1>Directory</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          // src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(search)}
        />
      </div>
      <div className="container">
        <Row xs={1} sm={2} md={3} lg={4} xl={4} className="my-4">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <Col key={movie.imdbID}>
                <MovieCard movie={movie} />
              </Col>
            ))
          ) : (
            <div className="empty">
              <h2>No Movies Found</h2>
            </div>
          )}
        </Row>
      </div>
    </div>
  );
}

export { Home };