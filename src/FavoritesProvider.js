import React, { createContext, useState } from 'react';

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(favorite) {
    // copy the current favorites array and add the new favorite to it
    setFavorites([...favorites, favorite]);
  }

  function removeFavorite(movie) {
    // copy the current favorites array filtering out the movie with the given name
    setFavorites(favorites.filter((favorite) => movie.Title !== favorite.Title));
  }

  return (
    <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite}}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesProvider, FavoritesContext };