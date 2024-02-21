// Products.js
"use client";
import React, { useState, useEffect } from "react";
import { CartProvider } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import cartData from "@/components/cartData";
import withAuth from "@/hoc/withAuth";
function Products() {
  // Load cart items from localStorage on component mount
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : cartData;
  });

  // Update local storage when cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    // Update local storage with the new cart
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <CartProvider>
      <Navbar cartItems={cartItems} updateCart={updateCart} />
      <HorizontalMenu />

      <ProductGrid />
      <Footer />
    </CartProvider>
  );
}

export default withAuth(Products);
