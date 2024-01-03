import ProductItem from '@/components/ui/product-item'
import productTotalPrice from '@/utils/product'
import { Product } from '@prisma/client'

interface ProductCarouselListProps {
  products: Product[]
}

const ProductCarouselList = ({ products }: ProductCarouselListProps) => {
  return (
    <div className='flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
      {products.map((product) => (
        <div key={product.id} className='w-[170px]'>
          <ProductItem product={productTotalPrice(product)} />
        </div>
      ))}
    </div>
  )
}

export default ProductCarouselList
