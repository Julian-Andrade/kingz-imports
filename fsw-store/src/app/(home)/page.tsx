import Image from "next/image";
import Categories from "./components/categories/categories";
import { prismaClient } from "@/lib/prisma";
import ProductCarouselList from "./components/products/product-carousel-list";
import SectionTitle from "@/components/ui/section-title";
import PromoBanner from "@/components/ui/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="p-5">
      <div className="mt-7">
        <PromoBanner
          src="/banner-home-01.png"
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
        <PromoBanner
          src="/banner-home-02.png"
          alt="Até 55% de desconto em mouses"
        />
      </div>

      <div className="mt-7">
        <SectionTitle title="Teclados" />
        <ProductCarouselList products={keyboards} />
      </div>

      <div className="mt-7">
        <PromoBanner
          src="/banner-home-03.png"
          alt="Até 20% de desconto em fones"
        />
      </div>

      <div className="mt-7">
        <SectionTitle title="Mouses" />
        <ProductCarouselList products={mouses} />
      </div>
    </div>
  );
}
