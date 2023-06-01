import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function MovieDetails() {
    const [favorites, setFavorites] = useState([])

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
  
  const saveFavorite = () => {
    setFavorites(movie)
  }
  console.log(favorites)


  if (movie === null) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <div>
        <h1>{movie.Title}</h1>
        <h3>{movie.Year}</h3>
         <img src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400'} alt={movie.Title}/>
      </div>
      <div>
        <button onClick={saveFavorite}>Favorite</button>
      </div>
    </>
  );
}
export { MovieDetails };