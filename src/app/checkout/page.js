"use client";
import React, { useState, useEffect, Suspense } from "react";
import { CartProvider, useCart } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import Footer from "@/components/Footer";
import BillingNavTrail from "@/components/BillingNavTrail";
import BillingContent from "@/components/BillingContent";
import withAuth from "@/hoc/withAuth";

function Billing() {
    // Load cart items from localStorage on component mount
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems =
            typeof window !== "undefined" ? localStorage.getItem("cartItems") : null;
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    // Update local storage when cartItems change
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
    }, [cartItems]);

    const updateCart = (updatedCart) => {
        setCartItems(updatedCart);
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CartProvider>
                <Navbar cartItems={cartItems} updateCart={updateCart} />
                <HorizontalMenu />
                <BillingNavTrail />
                <BillingContent updateCart={updateCart} />
                <Footer />
            </CartProvider>
        </Suspense>
    );
}

export default withAuth(Billing);
