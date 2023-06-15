import React, { useContext, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../src/routes/Home';
import { MovieDetails } from './routes/MovieDetails';
import { Layout } from './routes/Layout';
import { FavoritesProvider } from './FavoritesProvider';
import { FavoriteMovies } from './routes/FavoriteMovies'
import { ThemeContext } from './ThemeContent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/watchList', element: <FavoriteMovies /> },
      { path: ':Title', element: <MovieDetails /> },
    ],
  },
]);

function App() {
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = dark ? 'dark-theme' : 'light-theme';
  }, [dark]);

  return (
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  );
}

export default App;