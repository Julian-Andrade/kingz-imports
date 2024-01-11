import { Prisma } from '@prisma/client'
import Image from 'next/image'
import productTotalPrice from '@/utils/product'

interface OrderProductItem {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: {
      product: true
    }
  }>
}

const OrderProductItem = ({ orderProduct }: OrderProductItem) => {
  const productWithTotalPrice = productTotalPrice(orderProduct.product)

  return (
    <div className='flex items-center gap-4'>
      <div className='bg-white rounded-lg w-20 h-20 flex items-center justify-between'>
        <Image
          src={orderProduct.product.imageUrls[0]}
          width={0}
          height={0}
          sizes='100vw'
          className='h-auto max-h-20 max-w-20 w-auto object-contain'
          alt={orderProduct.product.name}
        />
      </div>

      <div className='flex flex-col gap-2 w-full'>
        <div className='bg-zinc-100 p-1 px-2 rounded-md text-xs text-center'>
          <p>
            Vendido e entregue por
            <span className='font-bold'> Kingz Imports</span>
          </p>
        </div>

        <p className='text-xs'>{orderProduct.product.name}</p>

        <div className='flex items-center gap-1 justify-between'>
          <div className='flex items-center gap-2'>
            <p className='text-base font-bold'>
              R$ {productWithTotalPrice.totalPrice.toFixed(2)}
            </p>
            {productWithTotalPrice.discountPercentage > 0 && (
              <p className='opacity-60 line-through text-xs'>
                R$ {Number(productWithTotalPrice.basePrice).toFixed(2)}
              </p>
            )}
          </div>

          <div>
            <span className='text-xs'>Qtd: {orderProduct.quantity}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderProductItem
