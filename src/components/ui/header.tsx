'use client'

import {
  MenuIcon,
  ShoppingCartIcon,
  MoveRight,
  Percent,
  Home,
  ListOrdered,
  MoveLeft,
  ListChecksIcon,
  LogOutIcon,
  LogIn,
} from 'lucide-react'
import { Button } from './button'
import { Card } from './card'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from './sheet'
import { signIn, useSession, signOut } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import Cart from './cart'

export const Header = () => {
  const { status, data } = useSession()

  const handleLoginClick = async () => {
    await signIn()
  }

  const handleLogoutClick = async () => {
    await signOut()
  }

  return (
    <Card className='flex items-center justify-between p-[2rem] rounded-none'>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size='icon'
            variant='outline'
            className='border-zinc-200 hover:bg-zinc-200 sm:hidden'
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side='left'>
          <SheetHeader className='text-left text-lg font-semibold'>
            Menu
          </SheetHeader>

          {status === 'authenticated' && (
            <div className='flex flex-col gap-4'>
              <div className='mt-4 flex items-center gap-4 rounded-md bg-zinc-200 p-2'>
                {status === 'authenticated' && data?.user && (
                  <Avatar>
                    <AvatarFallback>
                      {data.user.name?.[0].toUpperCase()}
                    </AvatarFallback>
                    {data.user.image && <AvatarImage src={data.user.image} />}
                  </Avatar>
                )}

                <div className='flex flex-col'>
                  <p className='font-bold'>{data?.user?.name}</p>
                  <span className='text-sm font-light'>
                    {data?.user?.email}
                  </span>
                </div>
              </div>

              <Separator />
            </div>
          )}

          <div className='mt-4 flex flex-col gap-2'>
            {status === 'unauthenticated' && (
              <Button
                onClick={handleLoginClick}
                variant='outline'
                className='w-full justify-start gap-2 border-zinc-200 hover:bg-zinc-200'
              >
                <MoveRight size={16} />
                Entrar
              </Button>
            )}
            {status === 'authenticated' && (
              <Button
                onClick={handleLogoutClick}
                variant='outline'
                className='w-full justify-start gap-2 border-zinc-200 hover:bg-zinc-200'
              >
                <MoveLeft size={16} />
                Sair
              </Button>
            )}

            <SheetClose asChild>
              <Link href='/'>
                <Button
                  variant='outline'
                  className='w-full justify-start gap-2 border-zinc-200 hover:bg-zinc-200'
                >
                  <Home size={16} />
                  Página Inicial
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href='/orders'>
                <Button
                  variant='outline'
                  className='w-full justify-start gap-2 border-zinc-200 hover:bg-zinc-200'
                >
                  <ListChecksIcon size={16} />
                  Meus Pedidos
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href='/deals'>
                <Button
                  variant='outline'
                  className='w-full justify-start gap-2 border-zinc-200 hover:bg-zinc-200'
                >
                  <Percent size={16} />
                  Ofertas
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href='/catalog'>
                <Button
                  variant='outline'
                  className='w-full justify-start gap-2 border-zinc-200 hover:bg-zinc-200'
                >
                  <ListOrdered size={16} />
                  Catálogo
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      <Link href='/' className='flex items-center gap-10'>
        <h1 className='text-lg font-bold'>KINGZ</h1>

        <div className='flex gap-6 text-sm max-[640px]:hidden'>
          <Link href='/'>
            <p className='hover:text-zinc-300 transition-colors'>Início</p>
          </Link>

          <Link href='/catalog'>
            <p className='hover:text-zinc-300 transition-colors'>Catálogo</p>
          </Link>

          <Link href='/deals'>
            <p className='hover:text-zinc-300 transition-colors'>Ofertas</p>
          </Link>
        </div>
      </Link>

      <div className='flex gap-5'>
        {status === 'unauthenticated' ? (
          <>
            <div className='flex items-center gap-2 max-[640px]:hidden'>
              <Button
                onClick={handleLoginClick}
                size='icon'
                variant='outline'
                className='border-zinc-200 hover:bg-zinc-200 max-[640px]:hidden'
              >
                <LogIn />
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className='flex items-center gap-2 max-[640px]:hidden'>
              {status === 'authenticated' && data?.user && (
                <Avatar>
                  <AvatarFallback>
                    olá, {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>
                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>
              )}
              <div className='flex flex-col gap-1 font-bold text-xs'>
                <span>Olá, {data?.user?.name}</span>

                <div className='flex gap-3 font-bold text-xs'>
                  <Link
                    href='/user'
                    className='text-xs font-normal hover:opacity-50 hover:transition-colors'
                  >
                    MINHA CONTA
                  </Link>
                  <Link
                    href='/'
                    onClick={handleLogoutClick}
                    className='text-xs font-normal hover:opacity-50 hover:transition-colors'
                  >
                    SAIR
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}

        <Sheet>
          <SheetTrigger asChild>
            <div className='flex items-center gap-2'>
              <Button
                size='icon'
                variant='outline'
                className='border-zinc-200 hover:bg-zinc-200'
              >
                <ShoppingCartIcon />
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side='right'>
            <Cart />
          </SheetContent>
        </Sheet>
      </div>
    </Card>
  )
}
