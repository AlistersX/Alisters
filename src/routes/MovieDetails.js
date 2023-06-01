import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FavoritesContext } from "../FavoritesProvider";

function MovieDetails() {
  const { addFavorite, favorites, removeFavorite } = useContext(FavoritesContext);
  const [movie, setMovie] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `http://www.omdbapi.com?apikey=b91b1458&t=${params.Title}`
        );
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [params.Title]);

  if (movie === null) {
    return <div>Loading...</div>;
  }

  const favoriteChecker = (movie) => {
    return favorites.find((mov) => mov.Title === movie.Title);
  };

  return (
    <>
      <div>
        <h3>{movie.Type.toUpperCase()}</h3>
        <h1 className="title">{movie.Title}</h1>
        <h3>{movie.Year}</h3>
        <h3>Cast: {movie.Actors}</h3>
        <h3>Plot Summary: {movie.Plot}</h3>
        <h3>Runtime: {movie.Runtime}</h3>
        <img
          className="movie-poster"
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "http://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <button
          onClick={() => {
            const outcome = favoriteChecker(movie);
            if (outcome === undefined) {
              addFavorite(movie);
            } else {
              alert("already added");
            }
          }}
        >
          add favorite
        </button>
        <div>
          <button
            onClick={() => {
              const outcome = favoriteChecker(movie);
              if (outcome !== undefined) {
                removeFavorite(movie);
              } else {
                alert("Movie is not in favorites");
              }
            }}
          >
            remove favorite
          </button>
        </div>
      </div>
    </>
  );
}

export { MovieDetails };
