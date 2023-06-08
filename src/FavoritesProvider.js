import React, { createContext, useState } from 'react';

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(favorite) {
    setFavorites([...favorites, favorite]);
  }

  function removeFavorite(movie) {
    setFavorites(favorites.filter((favorite) => movie.Title !== favorite.Title));
  }

  return (
    <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite}}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesProvider, FavoritesContext };