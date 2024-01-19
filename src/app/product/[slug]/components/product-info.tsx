'use client'

import BadgeDiscount from '@/components/ui/badge-discount'
import { Button } from '@/components/ui/button'
import { CartContext } from '@/providers/cart'
import { ProductTotalPriceProps } from '@/utils/product'
import { MinusIcon, MoveRight, PlusIcon, ShoppingCartIcon } from 'lucide-react'
import { useContext, useState } from 'react'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import { formatCurrencyToBrazil } from '@/utils/formatCurrencyToBrazil'

interface ProductInfoProps {
  product: ProductTotalPriceProps
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { status } = useSession()

  const [quantity, setQuantity] = useState(1)

  const [isSubmiting, setIsSubmiting] = useState(false)

  const { addProductToCart } = useContext(CartContext)

  const formatedTotalPrice = formatCurrencyToBrazil(product.totalPrice)
  const formatedBasePrice = formatCurrencyToBrazil(Number(product.basePrice))

  const handleDecreaseQuantityClick = () => {
    setQuantity((quantity) => (quantity === 1 ? quantity : quantity - 1))
  }

  const handleIncreaseQuantityClick = () => {
    setQuantity((quantity) => quantity + 1)
  }

  const handleAddToCartQuantity = () => {
    addProductToCart({ ...product, quantity })

    setIsSubmiting(true)

    toast.success('Produto adicionado ao carrinho.')

    setTimeout(() => {
      setIsSubmiting(false)
    }, 1500)
  }

  return (
    <div className='flex flex-col p-5 gap-1 md:bg-white md:rounded-lg md:mt-8 md:mr-5'>
      <h2 className='text-lg'>{product.name}</h2>

      <div className='flex items-center gap-1'>
        <h1 className='text-xl font-bold'>{formatedTotalPrice}</h1>
        {product.discountPercentage > 0 && (
          <BadgeDiscount>{product.discountPercentage}</BadgeDiscount>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className='text-sm line-through opacity-75'>{formatedBasePrice}</p>
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
          className='mt-8 font-bold uppercase flex items-center gap-2'
          onClick={handleAddToCartQuantity}
          disabled={isSubmiting}
        >
          adicionar ao carrinho
          <ShoppingCartIcon size={16} />
        </Button>
      ) : (
        <Button
          className='mt-8 font-bold uppercase flex items-center gap-2'
          disabled
        >
          acessar conta
          <MoveRight size={16} />
        </Button>
      )}
    </div>
  )
}

export default ProductInfo
