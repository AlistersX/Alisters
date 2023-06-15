import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function MovieCard({ movie }) {
  return (
    <Card className="movie-card border-0 text-center">
      <Card.Img
        className="movie-card-img"
        variant="top"
        src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400'}
        alt={movie.Title}
        style={{ height: '400px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>
          <Link to={`/${movie.Title}`} style={{ textDecoration: 'none', color: 'black' }}>
            {movie.Title}
          </Link>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export { MovieCard };