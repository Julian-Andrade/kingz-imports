import { useContext } from "react";
import { ShoppingCartIcon } from "lucide-react";
import BadgeTitle from "./badge-title";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import productTotalPrice from "@/utils/product";

const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div>
      <BadgeTitle iconSvg={<ShoppingCartIcon size={16} />} title="Carrinho" />

      {/* Render Products */}
      <div className="flex flex-col">
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={productTotalPrice(product as any) as any}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
