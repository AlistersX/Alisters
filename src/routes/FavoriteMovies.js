import React, { useContext } from 'react';
import { FavoritesContext } from '../FavoritesProvider';
import { Card, Col, Row } from 'react-bootstrap';
import { MovieCard } from '../components/MovieCard';
import { ThemeContext } from '../ThemeContent';

function FavoriteMovies() {
  const { dark } = useContext(ThemeContext);
  const { removeFavorite, favorites } = useContext(FavoritesContext);

  return (
    <div className={dark ? 'dark-theme container' : 'light-theme container'}>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {favorites?.length > 0 ? (
          favorites.map((movie) => (
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3"> 
          <Card className="movie-card border-0 text-center">
            <MovieCard movie={movie} />
            <div className="card-button-container">
              <button
                className="btn btn-danger btn-remove-favorite w-100"
                onClick={() => removeFavorite(movie)}
              >
                Remove Favorite
              </button>
            </div>
          </Card>
        </Col>
          ))
        ) : (
          <h3>Watchlist is empty</h3>
        )}
      </Row>
    </div>
  );
}

export { FavoriteMovies };