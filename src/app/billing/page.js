"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import Footer from "@/components/Footer";
import BillingNavTrail from "@/components/BillingNavTrail";
import BillingContent from "@/components/BillingContent";
import cartData from "@/components/cartData";
import React, { useState } from "react";
import withAuth from "@/hoc/withAuth";

function Billing() {
    const [cartItems, setCartItems] = useState(cartData);

    const updateCart = (updatedCart) => {
      setCartItems(updatedCart);
    };
    return (
        <div>   
        <Navbar cartItems={cartItems} updateCart={updateCart}/>
        <HorizontalMenu />
        <BillingNavTrail />
        <BillingContent />
        <Footer />
        </div>
    );
}

export default withAuth(Billing);