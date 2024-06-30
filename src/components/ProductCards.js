"use client";
import React from "react";
import { BsHeart, BsCart2 } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import PopularProductsUpdated from "./PopularProductsUpdated";
import NewArrivalProducts from "./NewArrivalProducts";
import IndexPageImage01 from "/public/images/IndexPageImage01.png";
import IndexPageImage02 from "/public/images/IndexPageImage02.png";
import IndexPageImage03 from "/public/images/IndexPageImage03.png";
import HomePagecategories from "./HomePageCategories";
import SuggestedProducts from "./SuggestedProducts";

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

      <PopularProductsUpdated></PopularProductsUpdated> 
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

      <HomePagecategories></HomePagecategories>

      <div className="grid grid-cols-12 bg-gray-100 lg:p-5 py-3 px-1">
        <div className="md:col-span-2 hidden md:flex"></div>
        <div className="md:col-span-8 col-span-12 flex flex-row md:gap-3 gap-1 p-1">
          <div>
            <Image src={IndexPageImage01} alt="Indexpage01"></Image>
          </div>
          <div>
            <Image src={IndexPageImage02} alt="Indexpage02"></Image>
          </div>
          <div>
            <Image src={IndexPageImage03} alt="Indexpage03"></Image>
          </div>
        </div>
        <div className="md:col-span-2 hidden md:flex"></div>
      </div>

      <SuggestedProducts> </SuggestedProducts>
    </div>
  );
};

export default ProductCards;
