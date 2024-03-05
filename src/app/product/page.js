// cart.js
"use client";
import React, { useState, useEffect } from "react";
import { CartProvider, useCart } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductOptions from "@/components/ProductOptions";
import ProductDescriptions from "@/components/ProductDescriptions";
import Footer from "@/components/Footer";
import withAuth from "@/hoc/withAuth";

function Cart() {
  // Load cart items from localStorage on component mount
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  // Update local storage when cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
  };

  return (
    <CartProvider>
      <Navbar cartItems={cartItems} updateCart={updateCart} />
      <HorizontalMenu />
      <ProductOptions />
      <ProductDescriptions />
      <Footer />
    </CartProvider>
  );
}

export default withAuth(Cart);
