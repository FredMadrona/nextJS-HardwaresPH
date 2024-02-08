"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import Footer from "@/components/Footer";
import BillingNavTrail from "@/components/BillingNavTrail";
import BillingContent from "@/components/BillingContent";

function Billing() {
    return (
        <div>   
        <Navbar />
        <HorizontalMenu />
        <BillingNavTrail />
        <BillingContent />
        <Footer />
        </div>
    );
}

export default Billing;