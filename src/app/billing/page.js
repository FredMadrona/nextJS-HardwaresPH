// Billing.js
"use client";
import React, { useState, useEffect } from "react";
import { CartProvider, useCart } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import Footer from "@/components/Footer";
import BillingNavTrail from "@/components/BillingNavTrail";
import BillingContent from "@/components/BillingContent";
import withAuth from "@/hoc/withAuth";

function Billing() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Load cart items from local storage when component mounts
        const storedCartItems = localStorage.getItem("cartItems");
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    const updateCart = (updatedCart) => {
        setCartItems(updatedCart);
    };

    return (
        <CartProvider>
            <Navbar cartItems={cartItems} updateCart={updateCart} />
            <HorizontalMenu />
            <BillingNavTrail />
            <BillingContent />
            <Footer />
        </CartProvider>
    );
}

export default withAuth(Billing);
