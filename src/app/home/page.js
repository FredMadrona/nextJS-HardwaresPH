// Home.js
"use client";
import React, { useState, useEffect } from "react";
import { CartProvider } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ImageSlider from "@/components/ImageSlider";
import ProductCards from "@/components/ProductCards";
import Footer from "@/components/Footer";
import cartData from "@/components/cartData";
import withAuth from "@/hoc/withAuth";

function Home() {
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
      <ImageSlider />
      <ProductCards />
      <Footer />
    </CartProvider>
  );
}

export default withAuth(Home);
