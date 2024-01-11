import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import { Prisma } from '@prisma/client'
import { format } from 'date-fns'
import OrderProductItem from './order-product-item'
import { Separator } from '@/components/ui/separator'
import { useMemo } from 'react'
import getOrderStatus from './helpers/status'

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  }>
}

const OrderItem = ({ order }: OrderItemProps) => {
  // Subtotal
  const subtotal = useMemo(() => {
    return order.orderProducts.reduce(
      (acc, orderProduct) =>
        acc + Number(orderProduct.product.basePrice) * orderProduct.quantity,
      0
    )
  }, [order.orderProducts])

  // Total Price
  const totalPrice = useMemo(() => {
    return order.orderProducts.reduce(
      (acc, orderProduct) =>
        acc +
        (Number(orderProduct.product.basePrice) -
          Number(orderProduct.product.basePrice) *
            (orderProduct.product.discountPercentage / 100)) *
          orderProduct.quantity,
      0
    )
  }, [order.orderProducts])

  // Discounts
  const discounts = subtotal - totalPrice

  return (
    <p>
      <Card>
        <Accordion type='single' className='w-full p-4' collapsible>
          <AccordionItem value={order.id}>
            <AccordionTrigger>
              <div className='flex flex-col text-md gap-1 text-left'>
                <p className='uppercase font-bold'>
                  Pedido com {order.orderProducts.length} produto(s).
                </p>
                <p className='text-xs opacity-60'>
                  Identificação do pedido: {order.id}
                </p>
                <span className='text-xs opacity-60'>
                  Pedido realizado em:{' '}
                  {format(order.createdAt, "dd/MM/yyyy 'às' HH:mm")}
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                  <div className='font-bold'>
                    <p>Status</p>
                    <p>{getOrderStatus(order.status)}</p>
                  </div>

                  <div>
                    <p className='font-bold'>Data</p>
                    <p>{format(order.createdAt, 'dd/MM/yyyy')}</p>
                  </div>

                  <div>
                    <p className='font-bold'>Pagamento</p>
                    <p>Cartão</p>
                  </div>
                </div>

                {order.orderProducts.map((orderProduct) => (
                  <OrderProductItem
                    key={orderProduct.id}
                    orderProduct={orderProduct}
                  />
                ))}

                <div className='flex flex-col gap-1 w-full text-xs'>
                  <Separator />

                  <div className='flex w-full justify-between py-3'>
                    <p>Subtotal</p>
                    <p>R$ {subtotal.toFixed(2)} </p>
                  </div>

                  <Separator />

                  <div className='flex w-full justify-between py-3'>
                    <p>Frete</p>
                    <p>GRÁTIS</p>
                  </div>

                  <Separator />

                  <div className='flex w-full justify-between py-3'>
                    <p>Descontos</p>
                    <p>- R$ {discounts.toFixed(2)}</p>
                  </div>

                  <Separator />

                  <div className='flex w-full justify-between py-3 text-sm font-bold'>
                    <p>Total</p>
                    <p>R$ {totalPrice.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </p>
  )
}

export default OrderItem
