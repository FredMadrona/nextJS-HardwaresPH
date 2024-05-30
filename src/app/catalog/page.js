"use client";
import React, { Suspense } from "react";
import { useCart } from "@/components/useCart";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import withAuth from "@/hoc/withAuth";
import NavTrail from "@/components/NavTrail";

function Products() {
  const { cartItems, updateCart } = useCart();

  if (!cartItems) {
    return <div>Loading...</div>;
  }

  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar cartItems={cartItems} updateCart={updateCart} />
        <HorizontalMenu />
        <NavTrail />
        <ProductGrid />
        <Footer />
      </Suspense>
  );
}

export default withAuth(Products);
