// cart.js
"use client";
import React, { useState } from "react";
import { CartProvider } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductOptions from "@/components/ProductOptions";
import ProductDescriptions from "@/components/ProductDescriptions";
import Footer from "@/components/Footer";
import cartData from "@/components/cartData";
import withAuth from "@/hoc/withAuth";

function Cart() {
  const [cartItems, setCartItems] = useState(cartData);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
  };

  return (
    <div>
      <CartProvider>
        <Navbar cartItems={cartItems} updateCart={updateCart} />
        <HorizontalMenu />
        <ProductOptions />
        <ProductDescriptions />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default withAuth(Cart);
