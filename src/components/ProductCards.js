import React from "react";
import { BsHeart, BsCart2 } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
const ProductCards = () => {
  return (
    <div>
      <div className="bg-white grid md:grid-cols-2 grid-cols-1 ">
        <div className="col-span-1 m-5">
          <Image
            src="/DoorControl.png"
            width={100}
            height={100}
            layout="responsive"
            className="rounded cursor-pointer hover:shadow-md "
          ></Image>
        </div>
        <div className="col-span-1 m-5">
          <Image
            src="/IntelligentDoorLock.png"
            width={100}
            height={100}
            layout="responsive"
            className="rounded cursor-pointer hover:shadow-md "
          ></Image>
        </div>
      </div>
      <div className="grid grid-cols-12 bg-gray-100 pt-5 ">
        <div className="md:col-span-2 col-span-1 "></div>
        <div className="md:col-span-8 col-span-10">
          {" "}
          <Link href="/catalog">
            <h1 className="text-2xl lg:text-3xl ml-5 text-primary align-center font-bold ">
              {" "}
              Popular Products
            </h1>{" "}
          </Link>
        </div>
        <div className="md:col-span-2 col-span-1 "></div>
      </div>

      {/* Start of Popular Products */}
      <div className="grid grid-cols-12 gap-4 bg-gray-100 p-5 ">
        <div className="md:col-span-2 col-span-1"></div>
        <div className="col-span-10 md:col-span-8 grid lg:grid-cols-4 grid-cols-2 justify-evenly gap-5">
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:shadow-lg">
            <Image src="/Hardware03.jpg" width={200} height={150}></Image>
            <p className="text-sm text-gray-500 mb-3 h-10">
              {" "}
              Stainless Steel Bathroom Hardware{" "}
            </p>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
              </p>
            </div>
            <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
              Add to cart <BsCart2 className="mx-2" />
              {/* Cart Icon */}
            </button>
          </div>
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:shadow-lg">
            <Image src="/Hardware02.jpg" width={200} height={150}></Image>
            <p className="text-sm text-gray-500 mb-3 h-10">
              {" "}
              Stainless Steel Bathroom Hardware{" "}
            </p>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
              </p>
            </div>
            <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
              Add to cart <BsCart2 className="mx-2" />
              {/* Cart Icon */}
            </button>
          </div>
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:shadow-lg">
            <Image src="/Hardware04.jpg" width={200} height={150}></Image>
            <p className="text-sm text-gray-500 mb-3 h-10">
              {" "}
              Exposed Door Closer Series{" "}
            </p>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
              </p>
            </div>
            <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
              Add to cart <BsCart2 className="mx-2" />
              {/* Cart Icon */}
            </button>
          </div>
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:shadow-lg">
            <Image src="/Hardware02.jpg" width={200} height={150}></Image>
            <p className="text-sm text-gray-500 mb-3 h-10">
              {" "}
              Intelligent Door Lock N6700{" "}
            </p>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
              </p>
            </div>
            <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
              Add to cart <BsCart2 className="mx-2" />
              {/* Cart Icon */}
            </button>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2"></div>
      </div>
      {/* End of Popular Products */}

      <div className="grid grid-cols-12 bg-gray-100 pt-5 ">
        <div className="col-span-1 md:col-span-2"></div>

        <div className="col-span-10 md:col-span-8">
          {" "}
          <h1 className="text-2xl lg:text-3xl ml-5 text-primary align-center font-bold hover:underline cursor-pointer">
            {" "}
            New Arrival{" "}
          </h1>{" "}
        </div>
        <div className="col-span-1 md:col-span-2"></div>
      </div>

      {/* Start of New Arrival */}
      <div className="grid grid-cols-12 gap-4 bg-gray-100 p-5 ">
        <div className="col-span-1 md:col-span-2"></div>
        <div className="col-span-10 md:col-span-8 grid lg:grid-cols-4 grid-cols-2 justify-evenly gap-5">
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:shadow-lg">
            <Image src="/Hardware03.jpg" width={200} height={150}></Image>
            <p className="text-sm text-gray-500 mb-3 h-10">
              {" "}
              Stainless Steel Bathroom Hardware{" "}
            </p>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
              </p>
            </div>
            <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
              Add to cart <BsCart2 className="mx-2" />
              {/* Cart Icon */}
            </button>
          </div>
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:shadow-lg">
            <Image src="/Hardware02.jpg" width={200} height={150}></Image>
            <p className="text-sm text-gray-500 mb-3 h-10">
              {" "}
              Stainless Steel Bathroom Hardware{" "}
            </p>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
              </p>
            </div>
            <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
              Add to cart <BsCart2 className="mx-2" />
              {/* Cart Icon */}
            </button>
          </div>
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:shadow-lg">
            <Image src="/Hardware04.jpg" width={200} height={150}></Image>
            <p className="text-sm text-gray-500 mb-3 h-10">
              {" "}
              Exposed Door Closer Series{" "}
            </p>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
              </p>
            </div>
            <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
              Add to cart <BsCart2 className="mx-2" />
              {/* Cart Icon */}
            </button>
          </div>
          <div className="col-span-1 bg-white p-4 rounded shadow-sm hover:cursor-pointer border hover:shadow-lg">
            <Image src="/Hardware02.jpg" width={200} height={150}></Image>
            <p className="text-sm text-gray-500 mb-3 h-10">
              {" "}
              Intelligent Door Lock N6700{" "}
            </p>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-semibold"> Product Price </p>
              {/* Heart Icon */}
              <p>
                {" "}
                <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
              </p>
            </div>
            <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
              Add to cart <BsCart2 className="mx-2" />
              {/* Cart Icon */}
            </button>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2"></div>
      </div>
      {/* End of New Arrival */}

      <div className="grid grid-cols-12 bg-white p-5 ">
        <div className="col-span-1 md:col-span-2"></div>
        <div className="col-span-10 md:col-span-8 grid md:grid-cols-3 grid-cols-1 gap-5">
          <div className="col-span-1">
            <Image
              src="/IndexPageImage01.png"
              width={150}
              height={150}
              className="w-full h-full cursor-pointer hover:shadow-md rounded"
            ></Image>
          </div>

          <div className="col-span-1">
            <Image
              src="/IndexPageImage02.png"
              width={150}
              height={150}
              className="w-full h-full cursor-pointer hover:shadow-md rounded"
            ></Image>
          </div>

          <div className="col-span-1 bg-red text-white">
            <Image
              src="/IndexPageImage03.png"
              width={150}
              height={150}
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
