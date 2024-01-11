import BadgeTitle from '@/components/ui/badge-title'
import ProductItem from '@/components/ui/product-item'
import { prismaClient } from '@/lib/prisma'
import productTotalPrice from '@/utils/product'
import { PercentIcon } from 'lucide-react'

export const metadata = {
  title: 'Ofertas',
}

const DealsPage = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  return (
    <div className='flex flex-col gap-8 p-5'>
      <BadgeTitle iconSvg={<PercentIcon size={14} />} title='Ofertas' />

      <div className='grid grid-cols-2 gap-8'>
        {deals.map((products) => (
          <ProductItem
            key={products.id}
            product={productTotalPrice(products)}
          />
        ))}
      </div>
    </div>
  )
}

export default DealsPage
