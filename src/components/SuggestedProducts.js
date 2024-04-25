import React from "react";
import Image from "next/image";
import { BsHeart } from "react-icons/bs";

export default function SuggestedProducts() {
    return (
        <div className="container flex md:hidden bg-gray-100 ">
          <div className="grid grid-cols-12 gap-4 bg-gray-100 pt-[25px] pb-[50px]">
        <div className="col-span-1"></div>
        <div className="col-span-10 grid md:grid-cols-4 grid-cols-2 justify-evenly gap-5">
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer hover:shadow-lg">
            <Image
              src="/Hardware04.jpg"
              height={100}
              width={100}
              alt="Hardware Image"
              layout="responsive"
            />
            <p className="text-sm text-gray-500 mb-3 h-10 mt-3">
              {" "}
              Stainless Steel Bathroom Hardware WWG17220{" "}
            </p>
            <div className="flex justify-between">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer mt-1 hover:text-primary" />
              </p>
            </div>         
          </div>
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer hover:shadow-lg">
            <Image
              src="/Hardware01.jpg"
              height={100}
              width={100}
              alt="Hardware Image"
              layout="responsive"
            />
            <p className="text-sm text-gray-500 mb-3 h-10 mt-3">
              {" "}
              Stainless Steel Bathroom Hardware {" "}
            </p>
            <div className="flex justify-between">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer mt-1 hover:text-primary" />
              </p>
            </div>         
          </div>
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer hover:shadow-lg">
            <Image
              src="/Hardware02.jpg"
              height={100}
              width={100}
              alt="Hardware Image"
              layout="responsive"
            />
            <p className="text-sm text-gray-500 mb-3 h-10 mt-3">
              {" "}
              Exposed Door Closer{" "}
            </p>
            <div className="flex justify-between">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer mt-1 hover:text-primary" />
              </p>
            </div>         
          </div>
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer hover:shadow-lg">
            <Image
              src="/Hardware03.jpg"
              height={100}
              width={100}
              alt="Hardware Image"
              layout="responsive"
            />
            <p className="text-sm text-gray-500 mb-3 h-10 mt-3">
              {" "}
              Intellligent Door Lock N6700{" "}
            </p>
            <div className="flex justify-between">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer mt-1 hover:text-primary" />
              </p>
            </div>         
          </div>
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer hover:shadow-lg">
            <Image
              src="/SafetyProduct(1).png"
              height={100}
              width={100}
              alt="Hardware Image"
              layout="responsive"
            />
            <p className="text-sm text-gray-500 mb-3 h-10 mt-3">
              {" "}
              Intellligent Door Lock N6700{" "}
            </p>
            <div className="flex justify-between">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer mt-1 hover:text-primary" />
              </p>
            </div>         
          </div>
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer hover:shadow-lg">
            <Image
             src="/SmartDevice(2).png"
              height={100}
              width={100}
              alt="Hardware Image"
              layout="responsive"
            />
            <p className="text-sm text-gray-500 mb-3 h-10 mt-3">
              {" "}
              Intellligent Door Lock N6700{" "}
            </p>
            <div className="flex justify-between">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer mt-1 hover:text-primary" />
              </p>
            </div>         
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
        </div>
    );
}