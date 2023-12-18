import { useContext } from "react";
import { ShoppingCartIcon } from "lucide-react";
import BadgeTitle from "./badge-title";
import { CartContext } from "@/providers/cart";

const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div>
      <BadgeTitle iconSvg={<ShoppingCartIcon size={16} />} title="Carrinho" />

      {/* Render Products */}
      {products.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  );
};

export default Cart;
