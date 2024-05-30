"use client";
import React, { Suspense } from "react";
import { useCart } from "@/components/useCart";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductOptions from "@/components/ProductOptions";
import ProductDescriptions from "@/components/ProductDescriptions";
import Footer from "@/components/Footer";
import withAuth from "@/hoc/withAuth";

function Cart() {
  const { cartItems, updateCart } = useCart();

  if (!cartItems) {
    return <div>Loading...</div>;
  }

  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar cartItems={cartItems} updateCart={updateCart} />
        <HorizontalMenu />
        <ProductOptions />
        <ProductDescriptions />
        <Footer />
      </Suspense>
  );
}

export default withAuth(Cart);
