import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

const getLocalCartItems = () => {
  try {
    const list = localStorage.getItem("Cart");
    if (list === null) {
      return [];
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return [];
  }
};

export default function CartProvider(props) {
  const [cartItems, setCartitems] = useState(getLocalCartItems());
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const Total = cartItems.reduce(
      (sum, item) => sum + item.price * item.cartQuantity,
      0
    );
    setCartTotal(Total);
    localStorage.setItem("Cart", JSON.stringify(cartItems));
  }, [cartItems]);

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

  const totalCartItems = cartItems.reduce(
    (sum, item) => sum + item.cartQuantity,
    0
  );

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
        cartTotal,
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
