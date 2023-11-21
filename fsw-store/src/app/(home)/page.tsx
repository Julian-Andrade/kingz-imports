import Image from "next/image";
import Categories from "./components/categories/categories";
import { prismaClient } from "@/lib/prisma";
import ProductCarouselList from "./components/products/product-carousel-list";
import SectionTitle from "@/components/ui/section-title";

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
      <div className="mt-7">
        <Image
          src="/banner-home-01.png"
          height={0}
          width={0}
          className="h-auto w-full"
          sizes="100vw"
          priority
          alt="Até 55% de desconto apenas este mês"
        />
      </div>

      <div className="mt-7">
        <Categories />
      </div>

      <div className="mt-7">
        <SectionTitle title="Ofertas" />
        <ProductCarouselList products={deals} />
      </div>

      <div className="mt-7">
        <Image
          src="/banner-home-02.png"
          height={0}
          width={0}
          className="h-auto w-full"
          sizes="100vw"
          priority
          alt="Até 55% de desconto em mouses"
        />
      </div>
    </div>
  );
}
