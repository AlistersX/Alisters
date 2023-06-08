import { render, screen } from '@testing-library/react';
import { FavoriteMovies } from './FavoriteMovies';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; 
import { FavoritesContext } from "../FavoritesProvider";

describe('Favorite Movies component', () => {
  test('renders favorite movie page', () => {
    render(
      <MemoryRouter>
        <FavoritesContext.Provider value={{addFavorite: ()=>{}, favorites: [], removeFavorite: ()=>{}}}>
          <FavoriteMovies />
        </FavoritesContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('No favorites')).toBeInTheDocument();
  });
});

