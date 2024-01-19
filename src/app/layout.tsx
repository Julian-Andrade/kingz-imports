import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/ui/header'
import { AuthProvider } from '@/providers/auth'
import Footer from '@/components/ui/footer'
import CartProvider from '@/providers/cart'
import SearchProvider from '@/providers/search'
import Search from '@/components/search/search'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Pagina Inicial',
    template: '%s | Kingz Imports',
  },
  icons: [
    {
      url: '/favicon.ico',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>
        <div className='flex h-full flex-col'>
          <AuthProvider>
            <Toaster />
            <CartProvider>
              <SearchProvider>
                <Header />
                <Search />
                <div className='flex-1 bg-zinc-100'>{children}</div>
                <Footer />
              </SearchProvider>
            </CartProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}
