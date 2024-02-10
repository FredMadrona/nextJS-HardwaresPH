"use client";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", "true");

      router.push("/home?username=admin");
    } else {
      alert("Invalid username or password");
    }
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
            />

            <p className="font-semibold mb-1 text-md text-center">
              {" "}
              Welcome Back !
            </p>

            <p className="text-center text-sm text-grey">
              Sign in to continue to HardwaresPH
            </p>
            <div className="p-5 mt-5 ">
              <form className="w-full flex justify-center flex-col gap-3 mx-1">
                <div className="flex-col ">
                  <div className="flex justify-between text-sm text-gray-700 font-semibold mx-4">
                    <span> Username </span>
                  </div>
                  <div className="relative">
                    <input
                      className="border p-1 pl-3 mx-3 my-1 rounded bg-gray-100 focus:outline-none w-[95%]"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                      name="username"
                    />
                  </div>
                </div>

                <div className="flex-col ">
                  <div className="flex justify-between text-sm text-gray-700 font-semibold mx-4">
                    <span> Password </span>
                    <span className="hover:text-gray-900 cursor-pointer">
                      {" "}
                      Forgot Password
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      className="border p-1 pl-3 mx-3 my-1 rounded bg-gray-100 focus:outline-none w-[95%]"
                      placeholder="Enter password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
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

                <button
                  className="border mx-auto placeholder-black bg-primary rounded w-[95%] text-white p-2 font-semibold mb-5 text-center cursor-pointer hover:bg-blue-800 ease-linear transition-all duration-300"
                  type="button"
                  onClick={handleLogin}
                  placeholder="login"
                >
                  {" "}
                  Submit{" "}
                </button>
              </form>
            </div>
            <div className="w-full flex-col justify-center align-center mb-5">
              <p className="text-gray-700 text-center font-semibold text-md hover:text-primary cursor-pointer ease-linear transition-all duration-300 ">
                {" "}
                - Sign in with -{" "}
              </p>
              <div className="flex justify-center gap-5 mt-4 align-center">
                <FaFacebook className="cursor-pointer hover:text-primary w-5 h-5 " />
                <FaXTwitter className="cursor-pointer hover:text-primary w-5 h-5 " />
                <FaGoogle className="cursor-pointer hover:text-primary w-5 h-5 " />
              </div>
            </div>
            <div className="flex w-full justify-center mt-10 align-middle">
              <p className="text-xs text-gray-400">Don't have an account ?</p>{" "}
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

export default LoginPage;
