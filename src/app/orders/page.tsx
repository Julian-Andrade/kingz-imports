import BadgeTitle from '@/components/ui/badge-title'
import { authOptions } from '@/lib/auth'
import { prismaClient } from '@/lib/prisma'
import { ListChecksIcon, MoveRight } from 'lucide-react'
import { getServerSession } from 'next-auth'
import OrderItem from './components/order-item'

export const metadata = {
  title: 'Compras',
}

const OrderPage = async () => {
  const user = await getServerSession(authOptions)

  // User unauthenticated
  if (!user) {
    return (
      <div className='flex flex-col items-center justify-center p-5'>
        <p className='font-bold'>
          Acesse sua conta para visualizar o histórico de pedidos
        </p>
      </div>
    )
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: (user as any).id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  })

  return (
    <div className='flex flex-col gap-8 p-5'>
      <BadgeTitle iconSvg={<ListChecksIcon size={14} />} title='Meus Pedidos' />

      {orders.map((order) => (
        <OrderItem order={order} />
      ))}
    </div>
  )
}

export default OrderPage
