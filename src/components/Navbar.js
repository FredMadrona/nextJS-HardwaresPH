"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsCart2, BsPerson, BsSearch } from "react-icons/bs";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import LogoutButton from "./LogoutButton";
import { useRouter } from "next/navigation";

const Navbar = ({ cartItems }) => {
  const router = useRouter();
  const totalItemsInCart =
    cartItems && cartItems.length > 0
      ? cartItems.reduce((acc, item) => acc + item.quantity, 0)
      : 0;

  const searchParams = useSearchParams();
  const username = searchParams.get("username");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

const Sample = (event)  =>{
router.push(`/checkout?username=admin`);
  }

  const handleSearchEnter = (event) => {
    if (event.key === "Enter") {
      let modifiedSearchQuery = searchQuery;
      const lowerCaseQuery = searchQuery.toLowerCase();
      // Check if search query is "floor" and replace with "Flooring"
      if (
        searchQuery.toLowerCase() === "floor" ||
        lowerCaseQuery === "flooring" ||
        lowerCaseQuery === "floors" ||
        lowerCaseQuery === "floor tiling"
      ) {
        modifiedSearchQuery = "Flooring";
      }
      if (
        searchQuery.toLowerCase() === "door" ||
        lowerCaseQuery === "doors" ||
        lowerCaseQuery === "window" ||
        lowerCaseQuery === "windows"
      ) {
        modifiedSearchQuery = "Door and Window";
      }
      if (
        searchQuery.toLowerCase() === "tile" ||
        lowerCaseQuery === "tiles" ||
        lowerCaseQuery === "tiling" ||
        lowerCaseQuery === "vinyl tile" ||
        lowerCaseQuery === "vinyl tiles"
      ) {
        modifiedSearchQuery = "Tile Products";
      }
      if (
        searchQuery.toLowerCase() === "Controller" ||
        lowerCaseQuery === "device" ||
        lowerCaseQuery === "devices" ||
        lowerCaseQuery === "switch" ||
        lowerCaseQuery === "light switch" ||
        lowerCaseQuery === "lightswitch" ||
        lowerCaseQuery === "switches" ||
        lowerCaseQuery === "smart light switch" ||
        lowerCaseQuery === "smart light switches" ||
        lowerCaseQuery === "smart switch" ||
        lowerCaseQuery === "controllers"
      ) {
        modifiedSearchQuery = "Smart Devices";
      }
      if (
        searchQuery.toLowerCase() === "outdoor light" ||
        lowerCaseQuery === "outdoor lighting" ||
        lowerCaseQuery === "lighting" ||
        lowerCaseQuery === "lights" ||
        lowerCaseQuery === "light lamp" ||
        lowerCaseQuery === "lamp" ||
        lowerCaseQuery === "outdoor lamp" ||
        lowerCaseQuery === "outdoor lamps"
      ) {
        modifiedSearchQuery = "Outdoor Lighting";
      }

      if (
        searchQuery.toLowerCase() === "safety products" ||
        lowerCaseQuery === "safety product" ||
        lowerCaseQuery === "hook" ||
        lowerCaseQuery === "glove" ||
        lowerCaseQuery === "gloves" ||
        lowerCaseQuery === "coated gloves" ||
        lowerCaseQuery === "rebar hook" ||
        lowerCaseQuery === "lifeline with rebar hook" ||
        lowerCaseQuery === "safety gloves" ||
        lowerCaseQuery === "lifeline"
      ) {
        modifiedSearchQuery = "Safety Products";
      }
      if (
        searchQuery.toLowerCase() === "pipe flaring tool" ||
        lowerCaseQuery === "pipe tool" ||
        lowerCaseQuery === "tool kit" ||
        lowerCaseQuery === "swagging tool" ||
        lowerCaseQuery === "swagging tool kit" ||
        lowerCaseQuery === "pvc" ||
        lowerCaseQuery === "pipe" ||
        lowerCaseQuery === "pvc pipe" ||
        lowerCaseQuery === "water pipe" ||
        lowerCaseQuery === "electric pipe" ||
        lowerCaseQuery === "pipes"
      ) {
        modifiedSearchQuery = "Pipeline";
      }

      if (
        searchQuery.toLowerCase() === "led screen" ||
        lowerCaseQuery === "led screens" ||
        lowerCaseQuery === "lcd" ||
        lowerCaseQuery === "screen" ||
        lowerCaseQuery === "pixel pitch" ||
        lowerCaseQuery === "screens" ||
        lowerCaseQuery === "lcd screen" ||
        lowerCaseQuery === "pitch screen"
      ) {
        modifiedSearchQuery = "LED Screen";
      }

      if (
        searchQuery.toLowerCase() === "door lock" ||
        lowerCaseQuery === "intelligent door lock" ||
        lowerCaseQuery === "door closer" ||
        lowerCaseQuery === "steel bathroom hardware" ||
        lowerCaseQuery === "bathroom hardware" ||
        lowerCaseQuery === "bathroom hardwares" ||
        lowerCaseQuery === "stainless steel bathroom hardware" ||
        lowerCaseQuery === "stainless steel hardware" ||
        lowerCaseQuery === "stainless hardware" ||
        lowerCaseQuery === "lock" ||
        lowerCaseQuery === "door knob" ||
        lowerCaseQuery === "steel" ||
        lowerCaseQuery === "bathroom" ||
        lowerCaseQuery === "knob"
      ) {
        modifiedSearchQuery = "Others";
      }

      // Redirect to catalog page with modified search query
      router.push(`/catalog?username=admin&menuItems=${modifiedSearchQuery}`);
      setSearchQuery("");
    }
  };

  const searchProducts = () => {
    // Perform search action with the current searchQuery
    console.log("Search query:", searchQuery);
    // ... Add your search logic here

    // Optionally, you can clear the search input after searching
    setSearchQuery("");
  };

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
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleSearchEnter}
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
        <a onClick={Sample}> 
          <svg
            className="h-8 w-8 text-primary cursor-pointer "
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
           
              <BsCart2 />
       
          </svg>
          </a>
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
