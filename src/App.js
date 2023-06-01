import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../src/routes/Home';
import { MovieDetails } from './routes/MovieDetails';
import { Layout } from './routes/Layout';
import { FavoritesProvider } from './FavoritesProvider';
import { FavoriteMovies } from './routes/FavoriteMovies'
//import MovieCard from './components/MovieCard';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}
*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/favorites', element: <FavoriteMovies /> },
      { path: ':Title', element: <MovieDetails /> },
    ],
  },
]);

function App() {
  return (
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  );
}

export default App;
