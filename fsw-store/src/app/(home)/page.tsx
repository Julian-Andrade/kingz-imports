import Image from "next/image";
import Categories from "./components/categories/categories";
import { prismaClient } from "@/lib/prisma";
import ProductCarouselList from "./components/products/product-carousel-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="p-5">
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
        priority
        alt="Até 55% de desconto apenas este mês"
      />

      <div className="mt-8">
        <Categories />
      </div>

      <div className="mt-8">
        <ProductCarouselList products={deals} />
      </div>
    </div>
  );
}
