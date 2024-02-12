"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import CartNavTrail from "@/components/CartNavTrail";
import CartContent from "@/components/CartContent";
import ShippingDetails from "@/components/ShippingDetails";
import Footer from "@/components/Footer";
import cartData from "@/components/cartData";
import React, { useState } from "react";
import withAuth from "@/hoc/withAuth";

function Checkout() {
  const [cartItems, setCartItems] = useState(cartData);
  const [totalItemsInCart, setTotalItemsInCart] = useState(
    cartItems.reduce((acc, item) => acc + item.quantity, 0)
  );

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    setTotalItemsInCart(updatedCart.reduce((acc, item) => acc + item.quantity, 0));
  };

  return (
    <div>
      <Navbar cartItems={cartItems} totalItems={totalItemsInCart} updateCart={updateCart} />
      <HorizontalMenu />
      <CartNavTrail/>
      <CartContent cartItems={cartItems} updateCart={updateCart} />
      <ShippingDetails/>
      <Footer/>
    </div>
  );
}

export default withAuth(Checkout);
