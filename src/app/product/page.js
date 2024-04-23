"use client";
import React, { useState, useEffect, Suspense } from "react";
import { CartProvider, useCart } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductOptions from "@/components/ProductOptions";
import ProductDescriptions from "@/components/ProductDescriptions";
import Footer from "@/components/Footer";
import withAuth from "@/hoc/withAuth";

function Cart() {
    // Load cart items from localStorage on component mount
    const [cartItems, setCartItems] = useState(() => {
        // Check if localStorage is defined (client-side)
        if (typeof window !== 'undefined') {
            const storedCartItems = localStorage.getItem("cartItems");
            return storedCartItems ? JSON.parse(storedCartItems) : [];
        } else {
            // Return empty array if localStorage is not defined
            return [];
        }
    });

    // Update local storage when cartItems change
    useEffect(() => {
        // Check if localStorage is defined (client-side)
        if (typeof window !== 'undefined') {
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
                <ProductOptions />
                <ProductDescriptions />
                <Footer />
            </CartProvider>
        </Suspense>
    );
}

export default withAuth(Cart);
