import BadgeTitle from '@/components/ui/badge-title'
import { authOptions } from '@/lib/auth'
import { prismaClient } from '@/lib/prisma'
import { ListChecksIcon } from 'lucide-react'
import { getServerSession } from 'next-auth'
import OrderItem from './components/order-item'

const OrderPage = async () => {
  const user = getServerSession(authOptions)

  if (!user) {
    return <span>Aceesso Negado</span>
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: (user as any).id,
    },
    include: {
      orderProducts: true,
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
