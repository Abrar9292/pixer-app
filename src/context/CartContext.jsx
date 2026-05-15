import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    alert(`${product.name} added to cart successfully`);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item, index) => index !== indexToRemove)
    );

    alert("Product removed from cart successfully");
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}