import React, {useContext} from 'react'
import { FavoritesContext } from '../FavoritesProvider';
import { Link } from 'react-router-dom';

function FavoriteMovies() {
  const {removeFavorite, favorites} = useContext(FavoritesContext)
  
  return (
    <>
      <div>
        {favorites?.length > 0 ? (favorites.map((movie) => (
          <div>
            <h3><Link to={`/${movie.Title}`}>{movie.Title}</Link></h3>
            <button onClick={() => removeFavorite(movie)}></button>
          </div>
          ))) : (
            <h1>no favorites</h1>
          )}
      </div>
      <div>
      </div>
    </>
  )
}

export {FavoriteMovies};