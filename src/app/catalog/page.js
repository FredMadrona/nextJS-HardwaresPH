"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
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
  };

  return (
    <div>
      <Navbar cartItems={cartItems} updateCart={updateCart} />
      <HorizontalMenu />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default withAuth(Products);
