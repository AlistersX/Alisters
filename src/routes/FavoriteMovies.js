import React, { useContext } from 'react';
import { FavoritesContext } from '../FavoritesProvider';
import { Card, Col, Row } from 'react-bootstrap';
import { MovieCard } from '../components/MovieCard';

function FavoriteMovies() {
  const { removeFavorite, favorites } = useContext(FavoritesContext);

  return (
    <div>
      {favorites?.length > 0 ? (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {favorites.map((movie) => (
            <Col key={movie.Title} className="d-flex align-items-stretch">
              <Card className="h-100">
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
          ))}
        </Row>
      ) : (
        <h1>No favorites</h1>
      )}
    </div>
  );
}

export { FavoriteMovies };
