import { prismaClient } from '@/lib/prisma'
import ProductImages from './components/product-images'
import ProductInfo from './components/product-info'
import productTotalPrice from '@/utils/product'
import ProductCarouselList from '@/components/ui/product-carousel-list'
import SectionTitle from '@/components/ui/section-title'

export const metadata = {
  title: 'Produtos',
}

interface ProductDetailsPageProps {
  params: {
    slug: string
  }
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug,
    },
    include: {
      category: {
        include: {
          Product: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  })

  if (!product) return null

  return (
    <>
      <div className='flex flex-col md:grid md:grid-cols-2'>
        <ProductImages imageUrls={product.imageUrls} name={product.name} />
        <ProductInfo product={productTotalPrice(product)} />
      </div>

      <div className='p-5 pb-8'>
        <SectionTitle title='Produtos Recomendados' />
        <ProductCarouselList products={product.category.Product} />
      </div>
    </>
  )
}

export default ProductDetailsPage
