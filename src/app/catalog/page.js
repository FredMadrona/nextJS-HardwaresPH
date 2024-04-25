"use client";
import React, { useState, useEffect, Suspense } from "react";
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
    // Check if localStorage is defined (client-side)
    if (typeof window !== "undefined") {
      const storedCartItems = localStorage.getItem("cartItems");
      return storedCartItems ? JSON.parse(storedCartItems) : cartData;
    } else {
      // Return default cart items if localStorage is not defined
      return cartData;
    }
  });

  // Update local storage when cartItems change
  useEffect(() => {
    // Check if localStorage is defined (client-side)
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartProvider>
        <Navbar cartItems={cartItems} updateCart={updateCart} />
        <HorizontalMenu />
        <NavTrail />
        <ProductGrid />
        <Footer />
      </CartProvider>
    </Suspense>
  );
}

export default withAuth(Products);
