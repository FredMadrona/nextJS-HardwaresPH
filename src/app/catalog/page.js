"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import cartData from "@/components/cartData";
import React, { useState } from "react";
import withAuth from "@/hoc/withAuth";
import NavTrail from "@/components/NavTrail";

function Products() {
  const [cartItems, setCartItems] = useState(cartData);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
  };
  return (
    <div>
      <Navbar cartItems={cartItems} updateCart={updateCart} />
      <HorizontalMenu />
      <NavTrail />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default withAuth(Products);
