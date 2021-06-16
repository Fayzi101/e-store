import React, { useState, createContext } from "react";

export const CartContext = createContext();

export default function CartProvider(props) {
  const [cartItems, setCartitems] = useState([]);
  //const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (item, quantity = 1) => {
    const index = cartItems.findIndex((itm) => itm.id === item.id);

    if (index === -1) {
      const product = { ...item, cartQuantity: quantity };
      setCartitems([...cartItems, product]);
    } else {
      const copyCart = [...cartItems];
      copyCart[index].cartQuantity += quantity;
      setCartitems(copyCart);
    }
  };

  const updateQuantity = (item, delta) => {
    const copyCart = [...cartItems];
    const index = cartItems.findIndex((itm) => itm.id === item.id);
    copyCart[index].cartQuantity += delta;
    setCartitems(copyCart);
  };

  const totalCartItems = cartItems.reduce((sum, e) => sum + e.CartQuantity, 0);

  const removeFromCart = (item) => {
    setCartitems(cartItems.filter((e) => e.id !== item.id));
  };

  const unitsInCart = (item) =>
    cartItems.reduce(
      (sum, e) => (e.id === item.id ? sum + e.cartQuantity : sum),
      0
    );

  return (
    <CartContext.Provider
      value={{
        ...props,
        addToCart,
        cartItems,
        updateQuantity,
        totalCartItems,
        unitsInCart,
        removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
