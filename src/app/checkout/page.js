"use client"; // Ensure this component runs on the client-side

import React, { Suspense } from "react";
import Nav from "@/components/NavbarUpdate";
import HorizontalMenu from "@/components/HorizontalMenu";
import Footer from "@/components/Footer";
import BillingNavTrail from "@/components/BillingNavTrail";
import BillingContent from "@/components/BillingContent";
import MobileBillingContent from "@/components/MobileBillingContent";
import { useCart } from "@/components/useCart";
import withAuth from "@/hoc/withAuth";
import { useSession } from "next-auth/react";

function Billing() {
    const { data: session, status } = useSession();
    const { cartItems, updateCart, isLoading, isError } = useCart();

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

    const cartItemsArray = Array.isArray(cartItems) ? cartItems : [];

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Nav
                cartItems={cartItemsArray}
                totalItems={cartItemsArray.reduce((acc, item) => acc + item.quantity, 0)}
                updateCart={updateCart}
            />
            <BillingNavTrail />
            <BillingContent cartItems={cartItems} updateCart={updateCart} />
            <MobileBillingContent updateCart={updateCart} />
            <Footer />
        </Suspense>
    );
}

export default withAuth(Billing);
