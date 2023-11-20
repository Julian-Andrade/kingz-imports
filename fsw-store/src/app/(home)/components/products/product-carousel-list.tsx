import ProductItem from "@/components/ui/product-item";
import { Product } from "@prisma/client";

interface ProductCarouselListProps {
  products: Product[];
}

const ProductCarouselList = ({ products }: ProductCarouselListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCarouselList;
