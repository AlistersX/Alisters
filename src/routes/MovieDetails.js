import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function MovieDetails() {

  const [movie, setMovie] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`http://www.omdbapi.com?apikey=b91b1458&t=${params.Title}`);
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

  console.log(movie)

  return (
    <>
      <div>
        <h3>{movie.Type.toUpperCase()}</h3>
        <h1>{movie.Title}</h1>
        <h3>{movie.Year}</h3>
        <h3>Cast: {movie.Actors}</h3>
        <h3>Plot Summary: {movie.Plot}</h3>
        <h3>Runtime: {movie.Runtime}</h3>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400'} alt={movie.Title}/>
      </div>
    </>
  );
}
export { MovieDetails };