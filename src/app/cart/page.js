"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductOptions from "@/components/ProductOptions";
import ProductDescriptions from "@/components/ProductDescriptions";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";
import cartData from "@/components/cartData";
import React, { useState } from "react";

function cart() {
  
  const [cartItems, setCartItems] = useState(cartData);
  
  const updateCart = (updatedCart) => {
    console.log('Updated Cart in cart:', updatedCart);
    setCartItems(updatedCart);
    
  };
  
  return (
    <div>
      <CartProvider>
      <Navbar cartItems={cartItems} updateCart={updateCart}/>
       <HorizontalMenu />
       <ProductOptions />
      <ProductDescriptions />
      <Footer/>
      </CartProvider>
    </div>
  );
}



export default cart;
