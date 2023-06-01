import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'; // Import Card component from react-bootstrap

function MovieCard({ movie }) {
  return (
    <Card className='movie-card'>
      <Card.Img variant='top' src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400'} alt={movie.Title} />
      <Card.Body>
        <Card.Title className='card-title'>
          <Link to={`/${movie.Title}`}>{movie.Title}</Link>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
