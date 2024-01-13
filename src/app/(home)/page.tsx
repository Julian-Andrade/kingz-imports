import Categories from './components/categories/categories'
import { prismaClient } from '@/lib/prisma'
import SectionTitle from '@/components/ui/section-title'
import PromoBanner from '@/components/ui/promo-banner'
import ProductCarouselList from '@/components/ui/product-carousel-list'
import Link from 'next/link'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  const macs = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'macs',
      },
    },
  })

  const watchs = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'watchs',
      },
    },
  })

  return (
    <>
      <div className='w-full'>
        <Link href='/category/iphones'>
          <PromoBanner
            src='/banner-home-01.png'
            alt='diversos modelos de iphone'
            variant='roundedNone'
          />
        </Link>
      </div>

      <div className='p-5'>
        <div className='mt-7'>
          <Categories />
        </div>

        <div className='mt-7'>
          <SectionTitle title='Ofertas' />
          <ProductCarouselList products={deals} />
        </div>

        <div className='mt-7 md:grid md:grid-cols-2 md:gap-4'>
          <Link href='/category/watchs'>
            <PromoBanner
              src='/banner-home-02.png'
              alt='os melhores watchs já criados'
            />
          </Link>

          <Link href='/category/watchs' className='hidden md:block'>
            <PromoBanner
              src='/banner-home-02.png'
              alt='os melhores watchs já criados'
            />
          </Link>
        </div>

        <div className='mt-7'>
          <SectionTitle title='Macs' />
          <ProductCarouselList products={macs} />
        </div>

        <div className='mt-7'>
          <Link href='/category/ipads'>
            <PromoBanner
              src='/banner-home-03.png'
              alt='encontre o ipad perfeito para você'
            />
          </Link>
        </div>

        <div className='mt-7'>
          <SectionTitle title='Watchs' />
          <ProductCarouselList products={watchs} />
        </div>
      </div>
    </>
  )
}
