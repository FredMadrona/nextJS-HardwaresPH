import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsSearch, BsCart2 } from "react-icons/bs";
import AuthButton from "./AuthButton";
import Logo from "/public/images/Hardware_Logo_Mobile.png";
import { useSession } from "next-auth/react";
import { useCart } from "./useCart"; // Corrected import path

const Nav = () => {
    const { data: session } = useSession();
    const [firstName, setFirstName] = useState("");
    const { cartItems = [] } = useCart(session?.user?.data?.token);

    useEffect(() => {
        if (session) {
            const user = session.user.data?.user;
            if (user) {
                setFirstName(user.first_name);
            }
        }
    }, [session]);

    const totalItemsInCart = Array.isArray(cartItems)
        ? cartItems.reduce((acc, item) => acc + item.quantity, 0)
        : 0;

    return (
        <nav className="sticky top-0 w-full z-50 bg-white p-1 grid grid-cols-12 justify-between items-center gap-4 h-18 lg:px-1/4">
            {/* Column 1: Logo */}
            <div className="flex items-center justify-center pl-1 md:p-0 col-span-2 md:col-span-3">
                <Image src={Logo} height="75" alt="Hardwares Logo" />
            </div>
            {/* End of Column 1 */}

            {/* Column 2: Search */}
            <div className="flex items-center md:col-span-5 col-span-7 w-auto">
                <div className="relative flex items-start w-full">
                    <input
                        type="text"
                        placeholder="Search Hardwares"
                        className="w-full bg-gray-100 pl-3 pr-10 py-2 rounded-lg text-gray-700 focus:outline-none focus:border-blue-300 placeholder-primary text-sm"
                    />
                    <BsSearch className="absolute right-3 top-3 text-primary" />
                </div>
            </div>
            {/* End of Column 2 */}

            {/* Column 3: Login and Cart */}
            <div className="h-full md:col-span-4 col-span-3 flex items-center justify-center">
                <div className="md:w-[40%] w-full flex items-center justify-end space-x-4">
                    {/* Cart Icon */}
                    <div className="relative flex flex-row items-center cursor-pointer">
                        <Link href="/cart">
                            <BsCart2 className="md:h-6 md:w-6 h-8 w-8 text-primary" />
                        </Link>
                        {/* Items in cart counter */}
                        {totalItemsInCart > 0 && (
                            <span className="absolute top-0 right-0 -mt-3 -mr-1 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full md:text-sm text-xs">
                                {totalItemsInCart}
                            </span>
                        )}
                    </div>
                    {/* End of Cart Icon */}

                    {/* User Greeting and Auth Button */}
                    {firstName && (
                        <Link href="/profile" className="text-primary text-medium font-bold hover:underline">
                            Hello, {firstName}
                        </Link>
                    )}
                    <AuthButton />
                </div>
            </div>
            {/* End of Column 3 */}
        </nav>
    );
};

export default Nav;
