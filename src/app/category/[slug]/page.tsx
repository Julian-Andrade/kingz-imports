import BadgeTitle from '@/components/ui/badge-title'
import ProductItem from '@/components/ui/product-item'
import { CATEGORY_ICON } from '@/constants/category-icon'
import { prismaClient } from '@/lib/prisma'
import productTotalPrice from '@/utils/product'

export const metadata = {
  title: 'Produto',
}

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      Product: true,
    },
  })

  if (!category) {
    return null
  }

  return (
    <div className='flex flex-col gap-8 p-5'>
      <BadgeTitle
        iconSvg={CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        title={category?.name}
      />

      <div className='grid grid-cols-2 gap-10 md:grid-cols-4'>
        {category.Product.map((product) => (
          <ProductItem key={product.id} product={productTotalPrice(product)} />
        ))}
      </div>
    </div>
  )
}

export default CategoryProducts
