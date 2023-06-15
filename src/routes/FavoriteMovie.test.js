import { render, screen } from '@testing-library/react';
import { FavoriteMovies } from './FavoriteMovies';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; 
import { FavoritesContext } from "../FavoritesProvider";
import { ThemeContext } from '../ThemeContent';

describe('Favorite Movies component', () => {
  test('renders favorite movie page', () => {
    render(
      <MemoryRouter>
        <ThemeContext.Provider value={{dark: ()=>{}}}>
        <FavoritesContext.Provider value={{addFavorite: ()=>{}, favorites: [], removeFavorite: ()=>{}}}>
          <FavoriteMovies />
        </FavoritesContext.Provider>
        </ThemeContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Watchlist is empty')).toBeInTheDocument();
  });
});