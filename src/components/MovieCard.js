import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        className="movie-card-img"
        src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400'}
        alt={movie.Title}
      />
      <div className="movie-card-body">
        <h5 className="movie-card-title">
          <Link to={`/${movie.Title}`} className="movie-card-link">
            {movie.Title}
          </Link>
        </h5>
      </div>
    </div>
  );
}

export { MovieCard };
