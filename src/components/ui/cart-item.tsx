import { CartContext, CartProduct } from '@/providers/cart'
import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react'
import Image from 'next/image'
import { Button } from './button'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { formatCurrencyToBrazil } from '@/utils/formatCurrencyToBrazil'

interface CartItemProps {
  product: CartProduct
}

const CartItem = ({ product }: CartItemProps) => {
  const { descreaseProductToCart, increaseProductToCart, removeProductToCart } =
    useContext(CartContext)

  const formatedTotalPrice = formatCurrencyToBrazil(product.totalPrice)
  const formatedBasePrice = formatCurrencyToBrazil(Number(product.basePrice))

  const handleDecreaseProductQuantityClick = () => {
    descreaseProductToCart(product.id)
  }

  const handleIncreaseProductQuantityClick = () => {
    increaseProductToCart(product.id)
  }

  const handleRemoveProductQuantityClick = () => {
    removeProductToCart(product.id)
    toast.success('Item removido do carrinho com sucesso.')
  }

  return (
    <div className='mt-4 flex items-center justify-between gap-5'>
      <div className='flex h-20 w-20 items-center justify-center gap-2 rounded-lg bg-white'>
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes='100vw'
          className='h-auto max-h-[70%] w-auto max-w-[80%]'
        />
      </div>
      <div className='flex flex-col'>
        <p className='text-xs font-semibold'>{product.name}</p>

        <div className='flex items-center gap-2'>
          <p className='text-sm font-bold'>{formatedTotalPrice}</p>

          {product.discountPercentage > 0 && (
            <p className='text-xs line-through opacity-75'>
              {formatedBasePrice}
            </p>
          )}
        </div>

        <div className='mt-2 flex items-center gap-4'>
          <Button
            size='icon'
            variant='outline'
            className='h-8 w-8 border-zinc-200 hover:bg-zinc-200'
            onClick={handleDecreaseProductQuantityClick}
          >
            <MinusIcon size={12} />
          </Button>

          <span className='text-xs'>{product.quantity}</span>

          <Button
            size='icon'
            variant='outline'
            className='h-8 w-8 border-zinc-200 hover:bg-zinc-200'
            onClick={handleIncreaseProductQuantityClick}
          >
            <PlusIcon size={12} />
          </Button>
        </div>
      </div>

      <Button
        variant='outline'
        className='border-zinc-200 hover:bg-zinc-200'
        onClick={handleRemoveProductQuantityClick}
      >
        <TrashIcon size={16} />
      </Button>
    </div>
  )
}

export default CartItem
