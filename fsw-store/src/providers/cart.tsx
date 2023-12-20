"use client";

import { ProductTotalPriceProps } from "@/utils/product";
import { ReactNode, createContext, useState } from "react";

export interface CartProduct extends ProductTotalPriceProps {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartBasePrice: number;
  cartTotalPrice: number;
  cartTotalDiscount: number;
  addProductToCart: (product: CartProduct) => void;
  descreaseProductToCart: (productId: string) => void;
  increaseProductToCart: (productId: string) => void;
  removeProductToCart: (productId: string) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartBasePrice: 0,
  cartTotalPrice: 0,
  cartTotalDiscount: 0,
  addProductToCart: () => {},
  descreaseProductToCart: () => {},
  increaseProductToCart: () => {},
  removeProductToCart: () => {},
});

const CartProvider = ({ children }: CartProviderProps) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const addProductToCart = (product: CartProduct) => {
    // Verify if item already in cart
    const productIsAlreadyInCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    // If item is already in the cart, add more quantity with last item quantity
    if (productIsAlreadyInCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }
          return cartProduct;
        }),
      );

      return;
    }

    // If item didn't exist in the cart, add item to final list
    setProducts((quantity) => [...quantity, product]);
  };

  // If quantity is 1, erase the product to cart
  // If quantity is than 1, decrease the quantity in 1
  const descreaseProductToCart = (productId: string) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }

          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    );
  };

  // If quantity is 1, increase the quantity to product in cart
  const increaseProductToCart = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }

        return cartProduct;
      }),
    );
  };

  // Remove item from cart list
  const removeProductToCart = (productId: string) => {
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== productId),
    );
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        descreaseProductToCart,
        increaseProductToCart,
        removeProductToCart,
        cartBasePrice: 0,
        cartTotalPrice: 0,
        cartTotalDiscount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
