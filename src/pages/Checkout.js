import React from "react";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import Footer from "@/components/Footer";
import ShippingDetails from "@/components/ShippingDetails";
import styles from "../pages/globals.css";
import CheckoutNavTrail from "@/components/CheckoutNavTrail";
import BillingAddress from "@/components/BillingAddress";

const Checkout = () => {
    return (
        <div>   
        <Navbar />
        <HorizontalMenu />
        <CheckoutNavTrail />
        <BillingAddress />
        <Footer />
        </div>
    );
};

export default Checkout;