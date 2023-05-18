import React from 'react'

function MovieCard( { movie } ) {

  return ( <>
  <div className='movie'>
    <div>
      <p>{movie.Year}</p>
    </div>

    <div>
      {/* { if the api does not have a poster for given movie, we render a placeholder image } */}
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400'} alt={movie.Title}/>
    </div>

    <div>
      <h3>{movie.Title}</h3>
    </div>
  </div>
</>)
}

export default MovieCard;