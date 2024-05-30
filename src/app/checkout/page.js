"use client";
import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import Footer from "@/components/Footer";
import BillingNavTrail from "@/components/BillingNavTrail";
import BillingContent from "@/components/BillingContent";
import MobileBillingContent from "@/components/MobileBillingContent";
import { useCart } from "@/components/useCart";
import withAuth from "@/hoc/withAuth";

function Billing() {
  const { cartItems, updateCart } = useCart();

  if (!cartItems) {
    return <div>Loading...</div>;
  }

  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar cartItems={cartItems} updateCart={updateCart} />
        <HorizontalMenu />
        <BillingNavTrail />
        <BillingContent cartItems={cartItems} updateCart={updateCart} />
        <MobileBillingContent updateCart={updateCart} />
        <Footer />
      </Suspense>
  );
}

export default withAuth(Billing);
