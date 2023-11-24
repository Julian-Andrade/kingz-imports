import BadgeTitle from "@/components/ui/badge-title";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/category-item";
import { prismaClient } from "@/lib/prisma";

export default async function CatalogPage() {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="flex flex-col gap-8 p-5">
      <BadgeTitle iconSvg={<ShapesIcon size={16} />} title="Catálogo" />

      <div className="grid grid-cols-2 gap-10">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
