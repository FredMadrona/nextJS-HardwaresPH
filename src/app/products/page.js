// Products.js
"use client";
import React, { useState, useEffect, Suspense } from "react";
import { CartProvider } from "@/components/useCart";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import Footer from "@/components/Footer";
import cartData from "@/components/cartData";
import withAuth from "@/hoc/withAuth";

const ProductGrid = React.lazy(() => import("@/components/ProductGrid"));

function Products() {
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

  useEffect(() => {
    // Check if localStorage is defined (client-side)
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    // Update local storage with the new cart
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartProvider>
        <Navbar cartItems={cartItems} updateCart={updateCart} />
        <HorizontalMenu />

        <ProductGrid />

        <Footer />
      </CartProvider>
    </Suspense>
  );
}

export default withAuth(Products);
