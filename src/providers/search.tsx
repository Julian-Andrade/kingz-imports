'use client'

import React, {
  createContext,
  ReactNode,
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useDeferredValue,
  useCallback,
} from 'react'

interface ISearchContext {
  searchResults: string
  deferredSearch: string
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void
  setSearchResults: Dispatch<SetStateAction<string>>
}

interface SearchProviderProps {
  children: ReactNode
}

export const SearchContext = createContext({} as ISearchContext)

const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchResults, setSearchResults] = useState('')
  const deferredSearch = useDeferredValue(searchResults)

  const onSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchResults(event.target.value)
  }, [])

  return (
    <SearchContext.Provider
      value={{ searchResults, onSearch, deferredSearch, setSearchResults }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider
