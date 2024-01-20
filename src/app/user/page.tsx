import BadgeTitle from '@/components/ui/badge-title'
import { ListChecksIcon, UserIcon } from 'lucide-react'
import UserItem from './components/user-item'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prismaClient } from '@/lib/prisma'
import OrderItem from '../orders/components/order-item'

export const metadata = {
  title: 'Usuário',
}

const UserPage = async () => {
  const user = await getServerSession(authOptions)

  // User unauthenticated
  if (!user) {
    return (
      <div className='flex flex-col items-center justify-center p-5'>
        <p className='font-bold'>
          Acesse sua conta para visualizar suas informações.
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
      <BadgeTitle iconSvg={<UserIcon size={14} />} title='Usuário' />

      <UserItem />

      <BadgeTitle
        iconSvg={<ListChecksIcon size={14} />}
        title='Resumo de Pedidos'
      />

      {orders.map((order) => (
        <OrderItem order={order} />
      ))}
    </div>
  )
}

export default UserPage
