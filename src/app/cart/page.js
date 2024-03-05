"use client";
import React, { useState, useEffect } from "react";
import { CartProvider, useCart } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import CartNavTrail from "@/components/CartNavTrail";
import CartContent from "@/components/CartContent";
import ShippingDetails from "@/components/ShippingDetails";
import Footer from "@/components/Footer";
import cartData from "@/components/cartData";
import withAuth from "@/hoc/withAuth";

function Checkout() {
  // Load cart items from localStorage initially
  const storedCartItems = localStorage.getItem("cartItems");
  const initialCartItems = storedCartItems
    ? JSON.parse(storedCartItems)
    : cartData;

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [totalItemsInCart, setTotalItemsInCart] = useState(
    initialCartItems.reduce((acc, item) => acc + item.quantity, 0),
  );

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    setTotalItemsInCart(
      updatedCart.reduce((acc, item) => acc + item.quantity, 0),
    );

    // Update local storage when cartItems change
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <CartProvider>
      <Navbar
        cartItems={cartItems}
        totalItems={totalItemsInCart}
        updateCart={updateCart}
      />
      <HorizontalMenu />
      <CartNavTrail />
      <CartContent cartItems={cartItems} updateCart={updateCart} />
      <ShippingDetails />
      <Footer />
    </CartProvider>
  );
}

export default withAuth(Checkout);
