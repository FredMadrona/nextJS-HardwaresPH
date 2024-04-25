import React from "react";
import Image from "next/image";

export default function HomePagecategories() {
  return (
    <div className="bg-gray-100 md:hidden flex flex-col">
      <div className="grid grid-cols-12 bg-gray-100 pt-5 ">
        <div className="md:col-span-2 hidden md:flex"></div>
        <div className="md:col-span-8 col-span-12 m-1">
          {" "}
          <h1 className="text-3xl ml-5 text-primary align-center font-bold ">
            {" "}
            Categories
          </h1>{" "}
        </div>
        <div className="md:col-span-2 col-span-1 "></div>
      </div>
      <div className="grid grid-cols-12 lg:p-5 p-1">
        <div className="md:col-span-2 hidden md:flex "></div>

        <div className="md:col-span-8 col-span-12 flex flex-row justify-center md:gap-3 gap-1 p-1">
          <div className="text-center bg-white flex flex-col justify-between ">
            <Image
              src="/Hardware03.jpg"
              width={125}
              height={200}
              alt="Door Image"
            />
            <span className="text-lg  text-gray-500 "> Door </span>
          </div>
          <div className=" text-center bg-white p-3 flex flex-col justify-between ">
            <Image
              src="/Flooring(1).png"
              width={125}
              height={200}
              alt="Door Image"
            />
            <span className="text-lg text-center text-gray-500">
              {" "}
              Flooring{" "}
            </span>
          </div>
          <div className="border text-center bg-white p-3 flex flex-col justify-between ">
            <Image
              src="/Tiles(1).png"
              width={125}
              height={150}
              alt="Door Image"
            />
            <span className="text-lg text-center text-gray-500">
              {" "}
              Tile Products{" "}
            </span>
          </div>
          <div className="border text-center bg-white p-3 flex flex-col justify-between ">
            <Image
              src="/SmartDevice(1).png"
              width={125}
              height={150}
              alt="Door Image"
            />
            <span className="text-lg text-center text-gray-500">
              {" "}
              Smart Products{" "}
            </span>
          </div>
        </div>
        <div className="md:col-span-2 hidden md:flex"></div>
      </div>
    </div>
  );
}
