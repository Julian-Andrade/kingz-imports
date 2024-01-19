import React from 'react'
import SearchResults from './search-results'
import { prismaClient } from '@/lib/prisma'
import SearchForm from './search-form'

const Search = async () => {
  const products = await prismaClient.product.findMany({})
  return (
    <div className='flex flex-col relative'>
      <SearchForm>
        <SearchResults products={products} />
      </SearchForm>
    </div>
  )
}

export default Search
