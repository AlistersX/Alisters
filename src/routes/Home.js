import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
    <div className="home container">
      <h1>Directory</h1>

      <div className="input-group mb-3">
        <input
          className="form-control"
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => searchMovies(search)}
          >
            Search
          </button>
        </div>
      </div>
      <Row className="my-4">
      {setSearchPerformed && search !== '' && message && <h2>{message}</h2>}
        {movies?.length > 0 ? (
          movies.map((movie) => (
            <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
              <Card className="movie-card border-0 text-center"> {/* Add 'border-0' class to remove the border and 'text-center' class to center-align the text */}
                <Card.Img
                  variant="top"
                  src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400'}
                  alt={movie.Title}
                />
                <Card.Body>
                  <Card.Title>
                    <Link to={`/${movie.Title}`}>{movie.Title}</Link>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      </Row>
    </div>
  );
}

export { Home };
