import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePagecategories() {
  const router = useRouter();

  const handleMenuItemClick = (category) => {
    router.push(`/catalog?username=admin&menuItems=${category}`);
  };

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
        <div className="col-span-1 "></div>
      </div>
      <div className="grid grid-cols-12 lg:p-5 p-1">
        <div className="md:col-span-2 hidden md:flex "></div>

        <div className="md:col-span-8 col-span-12 grid grid-cols-3 justify-center md:gap-3 gap-1 p-1">
          <div
            className=" text-center bg-white p-3 col-span-1 flex flex-col justify-between cursor-pointer"
            onClick={() => handleMenuItemClick("Door and Window")}
          >
            <Image
              src="/Hardware03.jpg"
              width={125}
              height={200}
              alt="Door Image"
            />
            <span className="text-lg text-center text-gray-500"> Door </span>
          </div>
          <div
            className=" text-center bg-white p-3 col-span-1 flex flex-col justify-between cursor-pointer"
            onClick={() => handleMenuItemClick("Flooring")}
          >
            <Image
              src="/Flooring(1).png"
              width={125}
              height={200}
              alt="Flooring Image"
            />
            <span className="text-lg text-center text-gray-500">
              {" "}
              Flooring{" "}
            </span>
          </div>
          <div
            className="border text-center bg-white p-3 col-span-1 flex flex-col justify-between cursor-pointer"
            onClick={() => handleMenuItemClick("LED Screen")}
          >
            <Image
              src="/LEDScreen(2).png"
              width={125}
              height={150}
              alt="LED ScreenImage"
            />
            <span className="text-lg text-center text-gray-500">
              {" "}
              LED Screen{" "}
            </span>
          </div>
          <div
            className="border text-center bg-white p-3 col-span-1 flex flex-col justify-between cursor-pointer"
            onClick={() => handleMenuItemClick("Outdoor Lighting")}
          >
            <Image
              src="/OutdoorLighting(1).png"
              width={125}
              height={150}
              alt="Outdoor Lighting Image"
            />
            <span className="text-lg text-center text-gray-500">
              {" "}
              Outdoor Lighting{" "}
            </span>
          </div>
          <div
            className="border text-center bg-white p-3 col-span-1 flex flex-col justify-between cursor-pointer"
            onClick={() => handleMenuItemClick("Pipeline")}
          >
            <Image
              src="/Pipeline(2).png"
              width={125}
              height={150}
              alt="Pipeline Image"
            />
            <span className="text-lg text-center text-gray-500">
              {" "}
              Pipeline{" "}
            </span>
          </div>
          <div
            className="border text-center bg-white p-3 col-span-1 flex flex-col justify-between cursor-pointer"
            onClick={() => handleMenuItemClick("Safety Products")}
          >
            <Image
              src="/SafetyProduct(1).png"
              width={125}
              height={150}
              alt="Safety Products Image"
            />
            <span className="text-lg text-center text-gray-500">
              {" "}
              Safety Products{" "}
            </span>
          </div>
          <div
            className="border text-center bg-white p-3 col-span-1 flex flex-col justify-between cursor-pointer"
            onClick={() => handleMenuItemClick("Smart Devices")}
          >
            <Image
              src="/SmartDevice(1).png"
              width={125}
              height={150}
              alt="Smart Products Image"
            />
            <span className="text-lg text-center text-gray-500">
              {" "}
              Smart Products{" "}
            </span>
          </div>
          <div
            className="border text-center bg-white p-3 col-span-1 flex flex-col justify-between cursor-pointer"
            onClick={() => handleMenuItemClick("Tile Products")}
          >
            <Image
              src="/Tiles(1).png"
              width={125}
              height={150}
              alt="Tiles Image"
            />
            <span className="text-lg text-center text-gray-500">
              {" "}
              Tile Products{" "}
            </span>
          </div>
          <div
            className="border text-center bg-white p-3 col-span-1 flex flex-col justify-between cursor-pointer"
            onClick={() => handleMenuItemClick("Others")}
          >
            <Image
              src="/Hardware02.jpg"
              width={125}
              height={150}
              alt="Door Stopper Image"
            />
            <span className="text-lg text-center text-gray-500"> Others </span>
          </div>
        </div>
        <div className="md:col-span-2 hidden md:flex"></div>
      </div>
    </div>
  );
}
