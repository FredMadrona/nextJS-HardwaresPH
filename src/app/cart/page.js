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
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from local storage when component mounts
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    } else {
      // If no data in local storage, use default cartData
      setCartItems(cartData);
    }
  }, []);

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
