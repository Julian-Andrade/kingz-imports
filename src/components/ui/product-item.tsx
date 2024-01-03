import { ProductTotalPriceProps } from '@/utils/product'
import { ArrowDownIcon } from 'lucide-react'
import Image from 'next/image'
import { Badge } from './badge'
import Link from 'next/link'
import BadgeDiscount from './badge-discount'

interface ProductItemProps {
  product: ProductTotalPriceProps
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className='flex flex-col gap-4'>
        <div className='relative flex h-[170px] w-[170px] items-center justify-center rounded-lg bg-white'>
          <Image
            src={product.imageUrls[0]}
            height={0}
            width={0}
            sizes='100vw'
            className='h-auto max-h-[75%] w-auto max-w-[75%]'
            alt={product.slug}
            style={{
              objectFit: 'contain',
            }}
          />

          {product.discountPercentage > 0 && (
            <BadgeDiscount className='absolute left-2 top-2'>
              {product.discountPercentage}
            </BadgeDiscount>
          )}
        </div>
        <div>
          <p className='overflow-hidden text-ellipsis whitespace-nowrap text-sm'>
            {product.name}
          </p>

          <div className='flex items-center gap-2'>
            {product.discountPercentage > 0 ? (
              <>
                <p className='font-bold text-xs'>
                  R$ {product.totalPrice.toFixed(2)}
                </p>

                <p className='text-xs line-through opacity-50'>
                  R$ {Number(product.basePrice).toFixed(2)}
                </p>
              </>
            ) : (
              <p className='opacity-65 text-xs line-through'>
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
