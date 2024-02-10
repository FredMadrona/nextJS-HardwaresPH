"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import CartNavTrail from "@/components/CartNavTrail";
import CartContent from "@/components/CartContent";
import ShippingDetails from "@/components/ShippingDetails";
import Footer from "@/components/Footer";
import cartData from "@/components/cartData";
import React, { useState } from "react";

function Products() {
  const [cartItems, setCartItems] = useState(cartData);

  const updateCart = (updatedCart) => {
    console.log('Updated Cart in Products:', updatedCart);
    setCartItems(updatedCart);
  };
  
  return (
    <div>
      <Navbar cartItems={cartItems} updateCart={updateCart}/>
      <HorizontalMenu />
      <CartNavTrail/>
      <CartContent cartItems={cartItems} updateCart={updateCart} />
      <ShippingDetails/>
      <Footer/>
    </div>
  );
}

export default Products;
