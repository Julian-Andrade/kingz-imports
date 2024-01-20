'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { useSession } from 'next-auth/react'

const UserItem = () => {
  const { data } = useSession()

  return (
    <div className='grid gap-8 md:grid md:grid-cols-2'>
      <div className='flex items-center gap-4 rounded-md bg-white p-8'>
        <Avatar className='w-20 h-20'>
          <AvatarFallback>{data?.user?.name?.[0].toUpperCase()}</AvatarFallback>
          {data?.user?.image && (
            <AvatarImage src={data.user.image} className='w-20 h-20' />
          )}
        </Avatar>

        <div className='flex flex-col'>
          <p className='font-bold text-xl'>Bem-vindo, {data?.user?.name}</p>
          <span className='text-base font-light flex items-center gap-2'>
            <Mail size={18} /> {data?.user?.email}
          </span>
        </div>
      </div>

      <div className='flex flex-col items-start gap-4 rounded-md bg-white p-8 max-[740px]:items-center'>
        <p>Valor disponível</p>
        <div className='flex items-center w-full md:justify-between max-[740px]:flex-col gap-5'>
          <p className='font-bold text-4xl'>R$ 00,00</p>
          <Button
            variant='outline'
            className='justify-start gap-2 border-zinc-200 hover:bg-zinc-200 uppercase'
          >
            Adicionar créditos
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UserItem
