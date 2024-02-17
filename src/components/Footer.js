import React, { useState } from "react";
const Footer = () => {
  return (
    <div className="py-5 flex justify-center m-5 ">
      <div className="mx-5"></div>
      <div className="container flex flex-wrap justify-center items-start ml-10%">
        <div className="w-full sm:w-1/2 md:w-1/5 mb-4 sm:mb-0 grid justify-center">
          <h2 className="text-md font-bold mb-2 cursor-pointer">
            INFORMATION{" "}
          </h2>
          <br></br>
          <div className="flex text-sm text-gray-500 ">
            <ul>
              <li className="mb-2 hover:text-gray-800 cursor-pointer">
                About Us
              </li>
              <li className="mb-2 hover:text-gray-800 cursor-pointer">
                Orders and Returns
              </li>
              <li className="mb-2 hover:text-gray-800 cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/5 mb-4 sm:mb-0 grid justify-center">
          <h2 className="text-md font-bold mb-2 cursor-pointer">
            CUSTOMER CARE{" "}
          </h2>
          <br></br>
          <div className="flex text-sm text-gray-500">
            <ul>
              <li className="mb-2 hover:text-gray-800 cursor-pointer">
                {" "}
                Help Center{" "}
              </li>
              <li className="mb-2 hover:text-gray-800 cursor-pointer">
                {" "}
                How To Buy
              </li>
              <li className="mb-2 hover:text-gray-800 cursor-pointer">
                {" "}
                How To Return{" "}
              </li>
              <li className="mb-2 hover:text-gray-800 cursor-pointer">
                {" "}
                Shipping & Delivery{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/5 mb-4 sm:mb-0 grid justify-center">
          <h2 className="text-md font-bold mb-2 cursor-pointer hover:text-underline">
            MY ACCOUNT{" "}
          </h2>
          <br></br>
          <div className="flex  text-sm text-gray-500">
            {" "}
            <ul>
              <li className="mb-2 cursor-pointer hover:text-gray-800">
                {" "}
                Sign In{" "}
              </li>
              <li className="mb-2 cursor-pointer hover:text-gray-800">
                {" "}
                View Cart{" "}
              </li>
              <li className="mb-2 cursor-pointer hover:text-gray-800">
                {" "}
                My Wishlist{" "}
              </li>
              <li className="mb-2 cursor-pointer hover:text-gray-800">
                {" "}
                Track My Order{" "}
              </li>
              <li className="mb-2 cursor-pointer hover:text-gray-800">
                {" "}
                Help{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/5 mb-4 sm:mb-0 grid justify-center">
          <h2 className="text-md font-bold mb-2 cursor-pointer">MY ACCOUNT </h2>
          <br></br>
          <div className="flex text-sm text-gray-500">
            <ul>
              <li className="mb-2 cursor-pointer hover:text-gray-800">
                Old Albay District,{" "}
              </li>
              <li className="mb-5 cursor-pointer hover:text-gray-800">
                Legazpi City
              </li>
              <li className="mb-2 cursor-pointer hover:text-gray-800">
                Mon - Fri 9:00am - 5pm{" "}
              </li>
              <li>
                <p className="text-red-500 font-bold cursor-pointer">
                  {" "}
                  CALL US:
                </p>{" "}
                <span className="text-black font-semibold cursor-pointer">
                  {" "}
                  +63 052 1234567{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/5 mb-4 sm:mb-0 grid justify-center">
          <h2 className="text-md font-bold mb-2 cursor-pointer">NEWSLETTER </h2>
          <br></br>
          <div className="flex text-sm text-gray-500">
            <ul>
              <li className="mb-2 cursor-pointer hover:text-gray-800">
                Subscribe to our mailing list
              </li>
              <li className="mb-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-2 px-4 bg-gray-200 text-black border border-gray-500 rounded focus:outline-none"
                />
              </li>
              <li className="mb-2">
                <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none">
                  Subscribe
                </button>
              </li>
              <li className="text-black font-bold hover:cursor-pointer">
                FOLLOW US
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-5"></div>
    </div>
  );
};

export default Footer;
