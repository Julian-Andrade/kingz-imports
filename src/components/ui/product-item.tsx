import productTotalPrice, { ProductTotalPriceProps } from '@/utils/product'
import Image from 'next/image'
import Link from 'next/link'
import BadgeDiscount from './badge-discount'
import { formatCurrencyToBrazil } from '@/utils/formatCurrencyToBrazil'

interface ProductItemProps {
  product: ProductTotalPriceProps
}

const ProductItem = ({ product }: ProductItemProps) => {
  const formatedTotalPrice = formatCurrencyToBrazil(product.totalPrice)
  const formatedBasePrice = formatCurrencyToBrazil(Number(product.basePrice))

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
                <p className='font-bold text-xs'>{formatedTotalPrice}</p>

                <p className='text-xs line-through opacity-50'>
                  {formatedBasePrice}
                </p>
              </>
            ) : (
              <p className='opacity-65 text-xs line-through'>
                {formatedBasePrice}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
