"use client";
// Checkout.js
import React, { useState, useEffect, Suspense } from "react";
import { CartProvider } from "@/components/CartContext";
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
    const [cartItems, setCartItems] = useState(() => {
        // Check if localStorage is defined (client-side)
        if (typeof window !== 'undefined') {
            const storedCartItems = localStorage.getItem("cartItems");
            return storedCartItems ? JSON.parse(storedCartItems) : cartData;
        } else {
            // Return default cart items if localStorage is not defined
            return cartData;
        }
    });

    const [totalItemsInCart, setTotalItemsInCart] = useState(
        cartItems.reduce((acc, item) => acc + item.quantity, 0),
    );

    const updateCart = (updatedCart) => {
        setCartItems(updatedCart);
        setTotalItemsInCart(
            updatedCart.reduce((acc, item) => acc + item.quantity, 0),
        );

        // Update local storage when cartItems change
        if (typeof window !== 'undefined') {
            localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
    );
}

export default withAuth(Checkout);
