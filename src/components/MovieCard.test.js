import { render, screen, fireEvent } from '@testing-library/react';
import { MovieCard } from './MovieCard';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('MovieCard component', () => {
    test('renders movie card when a movie is provided', () => {
      const movie = {
        Title: 'Avengers',
        Poster: 'http://example.com/avengers-poster.jpg',
      };
  
      render(
        <MemoryRouter>
          <MovieCard movie={movie} />
        </MemoryRouter>
      );
    });
  });