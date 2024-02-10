"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import CartNavTrail from "@/components/CartNavTrail";
import CartContent from "@/components/CartContent";
import ShippingDetails from "@/components/ShippingDetails";
import Footer from "@/components/Footer";
import cartData from "@/components/cartData";
import React, { useState } from "react";

function products() {
  const [cartItems, setCartItems] = useState(cartData);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
  };
  return (
    <div>
     <Navbar />
       <HorizontalMenu />
       <CartNavTrail/>
       <CartContent cartItems={cartItems} updateCart={updateCart} />
            
            <ShippingDetails/>
      <Footer/>
    </div>
  );
}



export default products;
