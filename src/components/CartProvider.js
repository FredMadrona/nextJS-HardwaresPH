// CartProvider.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const updateQuantity = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, totalQuantity, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
