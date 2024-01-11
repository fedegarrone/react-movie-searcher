import { useCallback, useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)

  const updateSearch = useCallback((newSearch) => {
    setError(null)

    setSearch(newSearch)

    if (newSearch === '') {
      setError('Search box cannot be empty.')
      return
    }

    if (newSearch?.length < 3) {
      setError('Your search must contain at least 3 characters.')
      return
    }

    if (newSearch?.match(/^([0-9])*$/)) {
      setError('You cannot search only numbers.')
    }
  }, [])

  return { search, updateSearch, error }
}
