import React, { useState, useEffect, useContext } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContent';
import 'bootstrap/dist/css/bootstrap.css';


const API_URL = 'http://www.omdbapi.com?apikey=b91b1458';

function Home() {
  const { dark, toggle } = useContext(ThemeContext);

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
    <div className={dark ? 'dark-theme home container' : 'light-theme home container'}>
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
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {setSearchPerformed && search !== '' && message && <h2>{message}</h2>}
            {movies.map((movie) => (
              <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={3} className="mb-3"> 
                <Card className="movie-card border-0 text-center">
                  <Card.Img
                    variant="top"
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400'}
                    alt={movie.Title}
                    className="movie-card-img"
                  />
                <Card.Body>
                <Card.Title>
                  <Link to={`/${movie.Title}`} style={{ textDecoration: 'none', color: 'black' }}>
                    {movie.Title}
                  </Link>
                </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <div className="d-flex align-items-center">
        <label htmlFor="darkSlider" className="me-2">Toggle Dark Mode</label>
        <input
          type="range"
          className="form-range"
          id="darkSlider"
          min="0"
          max="1"
          step="1"
          onChange={toggle}
          value={dark ? "1" : "0"}
        />
      </div>

    </div>
  );
}

export { Home };