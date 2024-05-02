"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Spinner } from "@nextui-org/spinner";

const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 2000);
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <main className="">
      <div className="relative w-full">
        <div className="absolute -z-10 w-full">
          <Image
            src="/forgotPasswordBG.svg"
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
                src="/FPicon2.svg"
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
              {isLoading ? (
                <>
                  <div className=" w-full p-3 mt-3 flex justify-center items-center">
                    <Spinner
                      className=""
                      label="Loading"
                      color="success"
                      labelColor="success"
                      size="md"
                    />
                  </div>
                </>
              ) : (
                isSubmitted && (
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
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
