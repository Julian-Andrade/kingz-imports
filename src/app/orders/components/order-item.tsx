import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import { Prisma } from '@prisma/client'
import { format } from 'date-fns'
import { useState } from 'react'

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: true
    }
  }>
}

const OrderItem = ({ order }: OrderItemProps) => {
  return (
    <p>
      <Card>
        <Accordion type='single' className='w-full p-5' collapsible>
          <AccordionItem value={order.id}>
            <AccordionTrigger>
              <div className='flex flex-col gap-1 text-left'>
                Pedido com {order.orderProducts.length} produto(s).
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div className='flex flex-col'>
                <div className='flex items-center justify-between'>
                  <div className='font-bold'>
                    <p>Status</p>
                    <p>{order.status}</p>
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
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </p>
  )
}

export default OrderItem
