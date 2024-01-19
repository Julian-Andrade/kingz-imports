import { SearchContext } from '@/providers/search'
import { useContext } from 'react'

const useSearch = () => {
  return useContext(SearchContext)
}

export default useSearch
