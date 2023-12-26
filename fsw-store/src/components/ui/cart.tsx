import { useContext } from "react";
import { ShoppingCartIcon } from "lucide-react";
import BadgeTitle from "./badge-title";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import productTotalPrice from "@/utils/product";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import createCheckout from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const { products, subTotal, total, totalDiscount } = useContext(CartContext);

  const handleFinishPurchaseClick = async () => {
    const checkout = await createCheckout(products);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  };

  return (
    <div className="flex h-full flex-col">
      <BadgeTitle iconSvg={<ShoppingCartIcon size={16} />} title="Carrinho" />

      {/* Render Products */}
      <div className="flex h-full max-h-full flex-col overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-3">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={productTotalPrice(product as any) as any}
                />
              ))
            ) : (
              <p className="mt-10 p-5 text-center font-semibold">
                Você ainda não possui nenhum item adicionado ao carrinho. Vamos
                as compras!
              </p>
            )}
          </div>
        </ScrollArea>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Subtotal</p>
          <p>R$ {subTotal.toFixed(2)}</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Entrega</p>
          <p>Grátis</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Descontos</p>
          <p>- R$ {totalDiscount.toFixed(2)}</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-sm font-bold">
          <p>Total</p>
          <p>R$ {total.toFixed(2)}</p>
        </div>

        <Button
          className="mt-8 font-bold uppercase"
          onClick={handleFinishPurchaseClick}
        >
          Finalizar
        </Button>
      </div>
    </div>
  );
};

export default Cart;
