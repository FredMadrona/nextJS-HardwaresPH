"use client";
import React, { useState } from 'react';
import LoginButton from './SignInHandler';
import Image from 'next/image';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SigninForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
 
  return (
    <div>
      <div className="grid grid-cols-12 w-full  h-screen">
        <div className="md:col-span-6 h-screen lg:col-span-4 col-span-12  flex flex-col items-center justify-center w-full ">
          <div className=" w-[80%]">
            <Image
              src="/Hardware_Logo.svg"
              className="mx-auto"
              height={250}
              width={250}
              alt="Hardwares PH logo"
            />

            <p className="font-semibold mb-1 text-md text-center"> Welcome!</p>

            <p className="text-center text-sm text-grey">
              Sign in to continue to HardwaresPH
            </p>
            <div className="p-5 mt-5 ">
              <form className="w-full flex justify-center flex-col gap-3 mx-1" onSubmit={handleSubmit}>
                <div className="flex-col ">
                  <div className="flex justify-between text-sm text-gray-700 font-semibold mx-4">
                    <span> Email or number </span>
                  </div>
                  <div className="relative">
                    <input
                      className="border p-1 pl-3 mx-3 my-1 rounded bg-gray-100 focus:outline-none w-[95%]"
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex-col ">
                  <div className="flex justify-between text-sm text-gray-700 font-semibold mx-4">
                    <span> Password </span>
                    <span className="hover:text-gray-900 cursor-pointer">
                      {" "}
                      <Link href="/forgotPassword"> Forgot Password </Link>
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      className="border p-1 pl-3 mx-3 my-1 rounded bg-gray-100 focus:outline-none w-[95%]"
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute top-1/2 right-5 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                <div className="flex w-full  align-center gap-1 px-3 ml-1">
                  <input type="checkbox" className="rounded cursor-pointer" />{" "}
                  <span className="text-gray-500 mb-1 text-sm cursor-pointer hover:text-primary">
                    {" "}
                    Remember me{" "}
                  </span>
                </div>

                <LoginButton email={email} password={password} />
              </form>
            </div>
            <div className="w-full flex-col justify-center align-center mb-5">
              <p className="text-gray-700 text-center font-semibold text-md hover:text-primary cursor-pointer ease-linear transition-all duration-300 ">
                {" "}
                - Sign in with -{" "}
              </p>
              <div className="flex justify-center gap-5 mt-4 align-center">
                <button >
                  <FaFacebook className="cursor-pointer hover:text-primary w-5 h-5 " />
                </button>
    
                {/* <FaXTwitter className="cursor-pointer hover:text-primary w-5 h-5 " /> */}
                <button >
                  <FaXTwitter className="cursor-pointer hover:text-primary w-5 h-5 " />
                </button>

                <button >
                  <FaGoogle className="cursor-pointer hover:text-primary w-5 h-5 " />
                </button>
                {/* <FaGoogle className="cursor-pointer hover:text-primary w-5 h-5 " /> */}
              </div>
            </div>
            <div className="flex w-full justify-center mt-10 align-middle">
              <p className="text-xs text-gray-400"> Dont have an account ?</p>{" "}
              <span className="text-xs text-primary font-bold ml-1 cursor-pointer hover:underline">
                Sign up now
              </span>
            </div>
            <div className="w-full justify-center text-center text-gray-400 mt-5">
              {" "}
              <p className="text-xs"> &copy; 2024 HardwaresPH </p>{" "}
            </div>
          </div>
        </div>

        <div
          className={`md:col-span-6 lg:col-span-8 col-span-auto h-full border border-red-950 bg-primary text-white`}
        ></div>
      </div>
    </div>
  );
};

export default SigninForm;
