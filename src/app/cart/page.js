"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Nav from "@/components/NavbarUpdate";
import HorizontalMenu from "@/components/HorizontalMenu";
import CartNavTrail from "@/components/CartNavTrail";
import CartContent from "@/components/CartContent";
import ShippingDetails from "@/components/ShippingDetails";
import Footer from "@/components/Footer";
import CartBar from "@/components/CartBar";
import { useCart } from "@/components/useCart";

function Checkout() {
    const { data: session, status } = useSession();
    const { cartItems, addToCart, removeFromCart, updateCart, isLoading, isError } = useCart();

    if (status === "loading" || isLoading) {
        return <div>Loading...</div>; // Display a loading indicator while session or cart data is being fetched
    }

    if (!session) {
        return <div>Please sign in to view your cart.</div>; // Handle unauthenticated users
    }

    if (isError) {
        return <div>Failed to load cart data. Please try again later.</div>; // Handle errors in fetching cart data
    }

    if (!cartItems) {
        return <div>Loading...</div>; // Ensure cartItems are loaded
    }

    return (
        <>
            <Nav
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

export default Checkout;
