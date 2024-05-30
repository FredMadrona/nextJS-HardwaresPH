"use client";
import React, { useState, useEffect, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ImageSlider from "@/components/ImageSlider";
import ProductCards from "@/components/ProductCards";
import Footer from "@/components/Footer";
import { useCart } from "@/components/useCart"; // Importing the useCart hook
import cartData from "@/components/cartData";
import withAuth from "@/hoc/withAuth";

function Home() {
  // Using the useCart hook to manage cart items
  const { cartItems, updateCart } = useCart();

  // Load cart items from localStorage on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCartItems = localStorage.getItem("cartItems");
      if (storedCartItems) {
        updateCart(JSON.parse(storedCartItems));
      }
    }
  }, [updateCart]);

  // Update local storage when cartItems change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar cartItems={cartItems} updateCart={updateCart} />
        <HorizontalMenu />
        <ImageSlider />
        <ProductCards />
        <Footer />
      </Suspense>
  );
}

export default withAuth(Home);
