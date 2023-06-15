import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FavoritesContext } from "../FavoritesProvider";
import { Button } from "react-bootstrap";

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
  <div className="container">
   <div className="movie-details">
    <h5>{movie.Type.toUpperCase()}</h5>
    <h1 className="title">{movie.Title}</h1>
    <h5>{movie.Year}</h5>
    <h5>{movie.Actors}</h5>
    <h5>{movie.Plot}</h5>
    <h5>{movie.Runtime}</h5>
    <div className="poster-container">
     <img
      className="movie-poster"
      src={
       movie.Poster !== "N/A"
        ? movie.Poster
        : "http://via.placeholder.com/400"
      }
      alt={movie.Title}
     />
     <div className="button-container mt-3">
      <Button
       variant="primary"
       size="md"
       className="mr-2"
       onClick={() => {
        const outcome = favoriteChecker(movie);
        if (outcome === undefined) {
         addFavorite(movie);
         alert("Movie Added");
        } else {
         alert("Already Added");
        }
       }}
      >
       Add to Watchlist
      </Button>
      <Button
       variant="danger"
       size="md"
       onClick={() => {
        const outcome = favoriteChecker(movie);
        if (outcome !== undefined) {
         removeFavorite(movie);
         alert("Movie Removed");
        } else {
         alert("Movie is not in Watchlist");
        }
       }}
      >
       Remove Movie
      </Button>
     </div>
    </div>
   </div>
  </div>
 );
}

export { MovieDetails }; 