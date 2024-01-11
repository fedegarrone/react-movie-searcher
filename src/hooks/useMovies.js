import { useCallback, useState } from 'react'
import { getNewMovies } from '../services/getNewMovies.js'
import debounce from 'just-debounce-it'

export function useMovies ({ sort }) {
  const [responseMovies, setResponseMovies] = useState([])

  const getMovies = useCallback(debounce(async (search) => {
    await getNewMovies(search).then(newMovies => setResponseMovies(newMovies))
  }, 500), [])

  return { movies: (sort ? [...responseMovies].sort((a, b) => a.title.localeCompare(b.title)) : responseMovies), getMovies }
}
