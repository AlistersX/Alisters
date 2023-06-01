//movie card - will render each movies details (year, poster, title)
import React from 'react';
import { Link } from 'react-router-dom';
function MovieCard({ movie }) {


  return (<>
    <div className='movie'>
      <div>
        {/* { if the api does not have a poster for given movie, we render a placeholder image } */}
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400'} alt={movie.Title}/>
      </div>
      <div>
        <h3><Link to={`/${movie.Title}`}>{movie.Title}</Link></h3>
      </div>
    </div>
  </>)
}

export default MovieCard;