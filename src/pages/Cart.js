import React from "react";
import CartNavTrail from "@/components/CartNavTrail";
import CartContent from "@/components/CartContent";
import ShippingDetails from "@/components/ShippingDetails";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import Footer from "@/components/Footer";
import styles from "../pages/globals.css";


function Cart() {
    return (
        <div>
           <Navbar/>
            <HorizontalMenu/>
            <CartNavTrail/>
            <CartContent/>
            <ShippingDetails/>
            <Footer/>

        </div>
    );
}

export default Cart;