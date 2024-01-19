'use client'
import React from 'react'
import SearchCardResult from './search-card-result'
import { Product } from '@prisma/client'
import useSearch from '@/hooks/use-search'
import productTotalPrice from '@/utils/product'

interface SearchResultsProps {
  products: Product[]
}

const SearchResults = ({ products }: SearchResultsProps) => {
  const { deferredSearch } = useSearch()
  const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([])

  React.useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(deferredSearch.toLowerCase())
    )
    setFilteredProducts(filtered)
  }, [deferredSearch, products])

  if (!deferredSearch) return null

  return (
    <ul className='p-5 bg-zinc-100 flex flex-col gap-5 absolute w-[calc(100%-2.5rem)] z-1 max-h-80 overflow-scroll top-16 left-5 box-border rounded-lg [&::-webkit-scrollbar]:hidden'>
      {deferredSearch && filteredProducts.length !== 0 ? (
        filteredProducts?.map((product) => (
          <li key={product.id}>
            <SearchCardResult product={productTotalPrice(product)} />
          </li>
        ))
      ) : (
        <li>
          <p className='text-black text-sm font-semibold'>
            {
              'Não encontramos nenhum produto para a pesquisa inserida, tente novamente.'
            }
          </p>
        </li>
      )}
    </ul>
  )
}

export default SearchResults
