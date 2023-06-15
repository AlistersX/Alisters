import { render, screen } from '@testing-library/react';
import { MovieDetails } from './MovieDetails';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; 
import { FavoritesContext } from "../FavoritesProvider";

describe('MovieDetails component', () => {
  test('renders movie detail page', () => {
    render(
      <MemoryRouter>
        <FavoritesContext.Provider value={{addFavorite: ()=>{}, favorites: [], removeFavorite: ()=>{}}}>
          <MovieDetails />
        </FavoritesContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});