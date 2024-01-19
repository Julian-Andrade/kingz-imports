'use client'

import { ReactNode } from 'react'
import { SearchIcon } from 'lucide-react'
import useSearch from '@/hooks/use-search'

interface SearchFormProps {
  children: ReactNode
}

const SearchForm = ({ children }: SearchFormProps) => {
  const { searchResults, onSearch } = useSearch()

  return (
    <div className='p-2 w-full'>
      <div className='bg-white border-zinc-100 border-2 rounded-md flex justify-between items-center px-5'>
        <input
          type='text'
          placeholder='Busque aqui...'
          spellCheck={false}
          className='bg-transparent focus:outline-none py-2 w-[95%] text-sm text-zinc-400'
          value={searchResults}
          onChange={onSearch}
        />
        <SearchIcon size={20} className='text-zinc-200' />
      </div>
      {children}
    </div>
  )
}

export default SearchForm
