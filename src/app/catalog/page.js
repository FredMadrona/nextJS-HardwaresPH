// Products.js
"use client";
import React, { useState, useEffect } from "react";
import { CartProvider } from "@/components/CartContext"; // Make sure to import CartProvider if it's needed
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import cartData from "@/components/cartData"; // Import the cartData file
import withAuth from "@/hoc/withAuth";
import NavTrail from "@/components/NavTrail";

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
  };

  return (
    <CartProvider>
      <Navbar cartItems={cartItems} updateCart={updateCart} />
      <HorizontalMenu />
      <NavTrail />
      <ProductGrid />
      <Footer />
    </CartProvider>
  );
}

export default withAuth(Products);
