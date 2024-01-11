import { useRef, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'

function App () {
  const { search, updateSearch, error } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovies } = useMovies({ sort })

  const inputSearch = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    error ?? getMovies(search, sort)
  }

  const handleChange = () => {
    const newSearch = inputSearch.current.value
    if (search === '' && newSearch === ' ') {
      return
    }
    updateSearch(newSearch)
    error ?? getMovies(newSearch, sort)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
      <header>
        <h1>Movie Searcher</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input style={error && { outline: '1px solid red' } } ref={inputSearch} onChange={handleChange} value={search} name="search" type="text" placeholder="The Avengers, The Matrix ..." />
          <button type="submit">Search</button>
          <label>Sort: <input type="checkbox" onChange={handleSort} value={sort} /></label>
        </form>
        {error ?? <p>{error}</p>}
      </header>
      <main className='results'>
        <Movies movies={movies}/>
      </main>
    </>
  )
}

export default App
