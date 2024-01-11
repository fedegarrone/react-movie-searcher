const API_KEY = 'ffaf2143'

export function getNewMovies (search) {
  if (search) {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
      .then(res => res.json())
      .then(response => () => {
        const movies = response?.Search

        const mappedMovies = movies?.map(movie => ({
          id: movie.imdbID,
          poster: movie.Poster,
          title: movie.Title,
          year: movie.Year,
          type: movie.Type
        }))

        return mappedMovies
      })
  }
}
