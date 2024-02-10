"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";
import cartData from "@/components/cartData";
import React, { useState } from "react";

function products() {
  const [cartItems, setCartItems] = useState(cartData);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
  };
  return (
    <div>
     <Navbar cartItems={cartItems} />
       <HorizontalMenu />
      <ProductGrid/>
      <Footer/>

    </div>
  );
}



export default products;
