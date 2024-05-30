// Checkout.js
"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import CartNavTrail from "@/components/CartNavTrail";
import CartContent from "@/components/CartContent";
import ShippingDetails from "@/components/ShippingDetails";
import Footer from "@/components/Footer";
import CartBar from "@/components/CartBar";
import { useCart } from "@/components/useCart";
import withAuth from "@/hoc/withAuth";

function Checkout() {
    const { cartItems, addToCart, removeFromCart, updateCart } = useCart();

    if (!cartItems) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar
                cartItems={cartItems}
                totalItems={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                updateCart={updateCart}
            />
            <HorizontalMenu />
            <CartNavTrail />
            <CartContent cartItems={cartItems} updateCart={updateCart} />
            <ShippingDetails />
            <CartBar cartItems={cartItems} updateCart={updateCart} />
            <Footer />
        </>
    );
}

export default withAuth(Checkout);
