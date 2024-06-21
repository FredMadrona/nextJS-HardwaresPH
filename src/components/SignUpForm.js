"use client";
import React, { useState } from "react";
import SignUpHandler from "./SignUpHandler";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    if (password !== confirm_password) {
      setError("Passwords do not match");
      return;
    }
    // Clear error if passwords match
    setError("");
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="grid grid-cols-12 w-full h-screen ">
        <div className=" md:col-span-6 h-screen lg:col-span-4 col-span-12 flex flex-col items-center justify-center w-full">
          <div className="w-[80%]">
            <Image
              src="/Hardware_Logo.svg"
              className="mx-auto"
              height={250}
              width={250}
              alt="Hardwares PH logo"
            />

            <p className="font-semibold mb-1 text-md text-center">Fill out the form to sign up!</p>

            <p className="text-center text-sm text-grey"></p>
            <div className="p-5 mt-5">
              <form className="w-full flex justify-center flex-col gap-3 mx-1" onSubmit={handleSignUp}>
                <div className="flex-col">
                  <div className="flex justify-between text-sm text-gray-700 font-semibold mx-4">
                    <span>First Name</span>
                  </div>
                  <div className="relative">
                    <input
                      className="border p-1 pl-3 mx-3 my-1 rounded bg-gray-100 focus:outline-none w-[95%]"
                      type="text"
                      id="first_name"
                      name="first_name"
                      value={first_name}
                      onChange={(e) => setfirst_name(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex-col">
                  <div className="flex justify-between text-sm text-gray-700 font-semibold mx-4">
                    <span>Last Name</span>
                  </div>
                  <div className="relative">
                    <input
                      className="border p-1 pl-3 mx-3 my-1 rounded bg-gray-100 focus:outline-none w-[95%]"
                      type="text"
                      id="last_name"
                      name="last_name"
                      value={last_name}
                      onChange={(e) => setlast_name(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex-col">
                  <div className="flex justify-between text-sm text-gray-700 font-semibold mx-4">
                    <span>Email</span>
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

                <div className="flex-col">
                  <div className="flex justify-between text-sm text-gray-700 font-semibold mx-4">
                    <span>Password</span>
                  </div>
                  <div className="relative">
                    <input
                      className="border p-1 pl-3 mx-3 my-1 rounded bg-gray-100 focus:outline-none w-[95%]"
                      type={showPassword ? "text" : "password"}
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

                <div className="flex-col">
                  <div className="flex justify-between text-sm text-gray-700 font-semibold mx-4">
                    <span>Confirm Password</span>
                  </div>
                  <div className="relative">
                    <input
                      className="border p-1 pl-3 mx-3 my-1 rounded bg-gray-100 focus:outline-none w-[95%]"
                      type={showPassword ? "text" : "password"}
                      id="confirm_password"
                      name="confirm_password"
                      value={confirm_password}
                      onChange={(e) => setConfirm_password(e.target.value)}
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

                {error && <p className="text-red-500 text-sm mx-4">{error}</p>}


                <SignUpHandler email={email} password={password} first_name={first_name} last_name={last_name} confirm_password={confirm_password} />
              </form>
            </div>

            <div className="w-full justify-center text-center text-gray-400 mt-5">
              <p className="text-xs">&copy; 2024 HardwaresPH</p>
            </div>
          </div>
        </div>

        <div className={`md:col-span-6 lg:col-span-8 col-span-auto h-full border border-red-950 bg-primary text-white`}></div>
      </div>
    </div>
  );
};

export default SignUpForm;
