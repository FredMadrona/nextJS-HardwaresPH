import React from "react";
import { BsHeart, BsCart2 } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import PopularProducts from "./PopularProducts";
import NewArrivalProducts from "./NewArrivalProducts";


const ProductCards = () => {
  return (
    <div>
      <div className="bg-white hidden md:grid grid-cols-2  ">
        <div className="col-span-1 m-5">
          <Image
            src="/DoorControl.png"
            width={100}
            height={100}
            layout="responsive"
            alt="Door Control product"
            className="rounded cursor-pointer hover:shadow-md "
          ></Image>
        </div>
        <div className="col-span-1 m-5">
          <Image
            src="/IntelligentDoorLock.png"
            width={100}
            height={100}
            layout="responsive"
            alt="Intelligent Door Lock Product"
            className="rounded cursor-pointer hover:shadow-md "
          ></Image>
        </div>
      </div>
      <div className="grid grid-cols-12 bg-gray-100 pt-5 ">

      {/* Start of Popular Products */}
      <div className="md:col-span-2 hidden md:flex"></div>
        <div className="md:col-span-8 col-span-12 m-1">
          {" "}
          <h1 className="text-3xl ml-5 text-primary align-center font-bold ">
            {" "}
            Popular Products
          </h1>{" "}
        </div>
        <div className="md:col-span-2 col-span-1 "></div>
      </div>
  
      <PopularProducts></PopularProducts>
      {/* End of Popular Products */}

      {/* Start of New Arrival */}
      <div className="grid grid-cols-12 bg-gray-100 pt-5 ">
      <div className="md:col-span-2 hidden md:flex"></div>
        <div className="md:col-span-8 col-span-12 m-1">
          {" "}
          <h1 className="text-3xl ml-5 text-primary align-center font-bold ">
            {" "}
            New Arrival 
          </h1>{" "}
        </div>
        <div className="md:col-span-2 col-span-1 "></div>
      </div>

      <NewArrivalProducts></NewArrivalProducts>
      
      {/* End of New Arrival */}

      <div className="grid grid-cols-12 bg-white p-5 ">
        <div className="col-span-1 md:col-span-2"></div>
        <div className="col-span-10 md:col-span-8 grid md:grid-cols-3 grid-cols-1 gap-5">
          <div className="col-span-1">
            <Image
              src="/IndexPageImage01.png"
              width={150}
              height={150}
              alt="Hardware Image"
              className="w-full h-full cursor-pointer hover:shadow-md rounded"
            ></Image>
          </div>

          <div className="col-span-1">
            <Image
              src="/IndexPageImage02.png"
              width={150}
              height={150}
              alt="Hardware Image"
              className="w-full h-full cursor-pointer hover:shadow-md rounded"
            ></Image>
          </div>

          <div className="col-span-1 bg-red text-white">
            <Image
              src="/IndexPageImage03.png"
              width={150}
              height={150}
              alt="Image"
              className="w-full h-full cursor-pointer hover:shadow-md rounded"
            ></Image>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2"></div>
      </div>
    </div>
  );
};

export default ProductCards;
