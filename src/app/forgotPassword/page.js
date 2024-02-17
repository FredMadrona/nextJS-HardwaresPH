"use client";

import React from "react";
import Image from "next/image";
import background from "/public/forgotPasswordBG.svg";
import image from "/public/FPicon2.svg";
import { useState } from "react";
import Link from "next/link";

const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Add any submission logic here
    setIsSubmitted(true);
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <main className="">
      <div className="relative w-full">
        <div className="absolute -z-10 w-full">
          <Image
            src={background}
            alt="background image"
            className="w-full"
            width={1000}
            height={1000}
          />
        </div>
        <div className="h-screen flex justify-center items-center">
          <div className="flex flex-col w-auto h-auto bg-white border shadow-md p-10 items-center justify-center rounded">
            <div className="flex justify-center">
              {" "}
              {/* Centering the Image */}
              <Image
                src={image}
                alt="Forgot Password Icon"
                width={200}
                height={200}
                className="mb-5 cursor-pointer"
              />
            </div>
            <h1 className="text-2xl font-bold text-center">
              {" "}
              Forgot Password?{" "}
            </h1>
            <p className="text-sm text-center mt-1 text-gray-600 ">
              {" "}
              Enter your registered email{" "}
            </p>
            <div className=" w-full justify-center flex-col mt-5">
              <input
                type="email"
                value={email}
                onChange={handleChange}
                className="w-full border border-gray-800 rounded p-2 mt-3 "
              />
              <button
                onClick={handleSubmit}
                disabled={!email}
                className={`w-full bg-green-600 hover:bg-green-700 rounded mt-2 text-white border border-green-500 cursor-pointer px-5 py-2 ${!email && "opacity-50 cursor-not-allowed"}`}
              >
                {" "}
                Submit{" "}
              </button>
              {isSubmitted && (
                <div className="mt-5">
                  <p className="text-xs text-gray-500 text-center">
                    {" "}
                    Email Verified, account reset successful
                  </p>
                  <p className="text-xs text-red-500 text-center">
                    {" "}
                    Username: admin Password: password{" "}
                  </p>
                  <Link href="/">
                    {" "}
                    <p className="text-sm  text-center mt-4 cursor-pointer hover:text-primary hover:underline">
                      {" "}
                      Go back to login page{" "}
                    </p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
