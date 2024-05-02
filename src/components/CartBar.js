"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CartItem from "./CartItem";

const CartBar = ({ cartItems, updateCart }) => {

    const [cartItemsState, setCartItemsState] = useState(cartItems);

    useEffect(() => {
        // Update local storage when cartItems change
        localStorage.setItem("cartItems", JSON.stringify(cartItemsState));
    }, [cartItemsState]);


    // Calculate subtotal, VAT, and grand total
    const subtotal = cartItems.reduce(
        (total, item) => total + parseFloat(item.total),
        0,
    );
    const vat = 0; // You need to calculate VAT based on your business rules
    const grandTotal = subtotal + vat;


    return (
        <nav
            className="  sticky bottom-0 w-full  lg:hidden ">
            <div className="flex justify-between align-center border-b  pb-2">
                  <span className="text-black mx-2 mt-1 md:text-md text-lg hover:text-gray-600 cursor-pointer font-semibold "
                        style={{ marginLeft: '20px' }} >
                    {" "}
                      Subtotal:{" "}
                  </span>
                <span className="text-black md:text-md text-lg mx-0 mt-1 font-bold cursor-pointer">
                    {" "}
                    ₱{subtotal.toFixed(2)}{" "}
                  </span>
                <Link href="/checkout?username=admin" className="w-full">
                    <button
                        className="w-[80%] bg-blue-500 py-3 rounded border text-white hover:shadow-md hover:bg-red-700"
                        style={{ marginLeft: '30px' }} // Add left margin style
                    >
                        <p className="font-semibold hover:underline text-md md:text-md">
                            CHECK OUT
                        </p>
                    </button>
                </Link>

            </div>
        </nav>
    );

};

export default CartBar;