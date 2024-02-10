"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductCards from "@/components/ProductCards";
import Footer from "@/components/Footer";
import cartData from "@/components/cartData";
import React, { useState } from "react";
// Use either the function keyword
function home() {
  const [cartItems, setCartItems] = useState(cartData);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
  };
  return (
    <div>
      <Navbar cartItems={cartItems} />
       <HorizontalMenu />
        <ProductCards/>    
        <Footer/>
    </div>
  );
}



export default home;