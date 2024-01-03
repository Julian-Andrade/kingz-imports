'use client'

import BadgeDiscount from '@/components/ui/badge-discount'
import { Button } from '@/components/ui/button'
import { CartContext } from '@/providers/cart'
import { ProductTotalPriceProps } from '@/utils/product'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { useContext, useState } from 'react'
import { useSession } from 'next-auth/react'

interface ProductInfoProps {
  product: ProductTotalPriceProps
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { status } = useSession()

  const [quantity, setQuantity] = useState(1)

  const { addProductToCart } = useContext(CartContext)

  const handleDecreaseQuantityClick = () => {
    setQuantity((quantity) => (quantity === 1 ? quantity : quantity - 1))
  }

  const handleIncreaseQuantityClick = () => {
    setQuantity((quantity) => quantity + 1)
  }

  const handleAddToCartQuantity = () => {
    addProductToCart({ ...product, quantity })
  }

  return (
    <div className='flex flex-col p-5 '>
      <h2 className='text-lg'>{product.name}</h2>

      <div className='flex items-center gap-1'>
        <h1 className='text-xl font-bold'>
          R$ {product.totalPrice.toFixed(2)}
        </h1>
        {product.discountPercentage > 0 && (
          <BadgeDiscount>{product.discountPercentage}</BadgeDiscount>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className='text-sm line-through opacity-75'>
          R$ {Number(product.basePrice).toFixed(2)}
        </p>
      )}

      <div className='mt-4 flex items-center gap-4'>
        <Button size='icon' variant='outline'>
          <MinusIcon size={16} onClick={handleDecreaseQuantityClick} />
        </Button>

        <span>{quantity}</span>

        <Button size='icon' variant='outline'>
          <PlusIcon size={16} onClick={handleIncreaseQuantityClick} />
        </Button>
      </div>

      <div className='mt-8 flex flex-col gap-3'>
        <h3 className='font-bold'>Descrição</h3>
        <p className='text-justify text-sm text-zinc-400'>
          {product.description}
        </p>
      </div>

      {status === 'authenticated' ? (
        <Button
          className='mt-8 font-bold uppercase'
          onClick={handleAddToCartQuantity}
        >
          adicionar ao carrinho
        </Button>
      ) : (
        <Button
          className='mt-8 font-bold uppercase'
          onClick={handleAddToCartQuantity}
          disabled
        >
          você precisa estar logado para adicionar o item ao carrinho
        </Button>
      )}
    </div>
  )
}

export default ProductInfo
