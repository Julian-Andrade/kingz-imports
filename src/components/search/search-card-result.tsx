'use client'

import Image from 'next/image'

import Link from 'next/link'
import useSearch from '@/hooks/use-search'
import { ProductTotalPriceProps } from '@/utils/product'

const SearchCardResult = ({
  product,
}: {
  product: ProductTotalPriceProps | undefined
}) => {
  const { setSearchResults } = useSearch()

  if (!product) {
    return null
  }

  return (
    <Link
      href={`/product/${product.slug}`}
      onClick={() => setSearchResults('')}
      key={product.id}
      className='flex gap-4'
    >
      <div className='bg-white w-14 h-14 rounded-md flex items-center justify-center'>
        <Image
          src={product.imageUrls[0]}
          sizes='100vw'
          alt={product.description}
          width={0}
          height={0}
          className='w-10 h-10 object-cover'
        />
      </div>
      <div>
        <p className='text-black text-sm'>{product.name}</p>
        <div className='flex gap-1 items-center'>
          <span className='text-primary font-bold text-lg'>
            R$ {Number(product.totalPrice).toFixed(2)}
          </span>
          <span className='text-black opacity-50 line-through text-xs'>
            R$ {Number(product.basePrice).toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default SearchCardResult
