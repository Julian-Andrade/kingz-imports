import { Product } from '@prisma/client'

export interface ProductTotalPriceProps extends Product {
  totalPrice: number
}

const productTotalPrice = (product: Product): ProductTotalPriceProps => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    }
  }

  const totalDiscount =
    Number(product.basePrice) * (product.discountPercentage / 100)

  return {
    ...product,
    totalPrice: Number(product.basePrice) - totalDiscount,
  }
}

export default productTotalPrice
