import React from "react";
import Image from "next/image";
import { BsCart2, BsPerson, BsSearch } from "react-icons/bs";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import LogoutButton from "./LogoutButton";
const Navbar = ({ cartItems }) => {
  const totalItemsInCart =
    cartItems && cartItems.length > 0
      ? cartItems.reduce((acc, item) => acc + item.quantity, 0)
      : 0;

  const searchParams = useSearchParams();
  const username = searchParams.get("username");

  return (
    <nav className="  sticky top-0 w-full z-50 bg-white p-1 grid grid-cols-12 justify-between items-center gap-4 h-18 lg:px-1/4">
      {/* Column 1: Logo */}
      <div className="flex items-center justify-center col-span-4  ">
        <Link href="/home?username=admin">
          <Image
            src="/Hardware_Logo.svg"
            height={100}
            width={250}
            alt="Hardwares Logo "
          ></Image>
        </Link>
      </div>
      {/* End of Column 1 */}

      {/* Column 2: Search */}
      <div className="flex items center md:col-span-4 col-span-6">
        <div className="relative flex items-start q w-full ">
          <input
            type="text"
            placeholder="Search Hardwares"
            className="w-full bg-gray-100 pl-3 pr-10 py-2 rounded-lg text-gray-700 focus:outline-none focus:border-blue-300 placeholder-primary text-sm"
          />
          <BsSearch className="absolute right-3 top-3 text-primary" />
        </div>
        {/* End of Column 2 */}
      </div>
      {/* End of Column 2 */}

      {/* Column 3: Login and Cart */}
      <div className="md:flex flex-no-wrap hidden items-start justify-center gap-4 w-full md:col-span-4 col-span-2 ">
        <div className="flex flex-row items-center  gap-1 lg:mr-5">
          <BsPerson className="h-6 w-6 text-primary cursor-pointer " />
          {` `}
          <span href="/" className="text-primary mr-5 cursor-pointer">
            {username}
          </span>
          {` `}
        </div>
        <LogoutButton />
        <div className="relative flex flex-row items-center ">
          <svg
            className="h-8 w-8 text-primary cursor-pointer "
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <Link href="/cart">
              <BsCart2 />
            </Link>
          </svg>
          {/* items in cart counter */}
          <span className="absolute top-0 right-0 -mt-3 -mr-1 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-sm">
            {totalItemsInCart}
          </span>
        </div>
      </div>
      {/* End of Column 3 */}
    </nav>
  );
};

export default Navbar;
