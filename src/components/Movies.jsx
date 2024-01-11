function ListOfMovies ({ movies }) {
  return (
    <ul className="movies">
          {movies?.map(movie => (
            <li className='movie' key={movie.id}>
              <h3>{movie.title}</h3>
              <p>Year: {movie.year} - Type: {movie.type}</p>
              <img src={movie.poster} alt={`${movie.title} poster image`} />
            </li>))}
        </ul>
  )
}

function NoMovies () {
  return (<p>No results founded.</p>)
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? (<ListOfMovies movies={movies}/>)
      : (<NoMovies/>)
  )
}