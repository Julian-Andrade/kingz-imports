"use client";

import BadgeDiscount from "@/components/ui/badge-discount";
import { Button } from "@/components/ui/button";
import { ProductTotalPriceProps } from "@/utils/product";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  product: Pick<
    ProductTotalPriceProps,
    "basePrice" | "description" | "discountPercentage" | "totalPrice" | "name"
  >;
}

const ProductInfo = ({
  product: { name, basePrice, totalPrice, description, discountPercentage },
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantityClick = () => {
    setQuantity((quantity) => (quantity === 1 ? quantity : quantity - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantity((quantity) => quantity + 1);
  };

  return (
    <div className="flex flex-col p-5">
      <h2 className="text-lg">{name}</h2>

      <div className="flex items-center gap-1">
        <h1 className="text-xl font-bold">R$ {totalPrice.toFixed(2)}</h1>
        {discountPercentage > 0 && (
          <BadgeDiscount>{discountPercentage}</BadgeDiscount>
        )}
      </div>

      {discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-4">
        <Button size="icon" variant="outline">
          <ArrowLeftIcon size={16} onClick={handleDecreaseQuantityClick} />
        </Button>

        <span>{quantity}</span>

        <Button size="icon" variant="outline">
          <ArrowRightIcon size={16} onClick={handleIncreaseQuantityClick} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm text-zinc-400">{description}</p>
      </div>

      <Button className="mt-8 font-bold uppercase">
        adicionar ao carrinho
      </Button>
    </div>
  );
};

export default ProductInfo;
