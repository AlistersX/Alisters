import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navigation } from './Navigation';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

describe('Navigation component', () => {
  test('renders Navigation with correct links', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const searchMoviesLink = screen.getByRole('link', { name: /Search Movies/i });
    expect(searchMoviesLink).toBeInTheDocument();
    userEvent.click(searchMoviesLink);
    expect(document.location.href).toContain('/');

    const watchlistLink = screen.getByRole('link', { name: /Watchlist/i });
    expect(watchlistLink).toBeInTheDocument();
    userEvent.click(watchlistLink);
    expect(document.location.href).toContain('/favorites');
  });
});