import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Navigation } from './components/Navigation';
import { MovieDetails } from './MovieDetails';
import { FavoriteMovies } from './FavoriteMovies'
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
