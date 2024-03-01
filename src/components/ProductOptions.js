import React, { useState } from "react";
import Image from "next/image";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "./CartContext";
import cartData from "./cartData";
import allProducts from "@/data/allProducts";
import { useSearchParams, useRouter } from "next/navigation";


const ProductOptions = () => {
  const ProductParams = useSearchParams();
  const ProductIndex = ProductParams.get("PopProduct");
  const CartRouter = useRouter();

  const options = ["Small", "Medium", "Large"];
  const { addToCart } = useCart();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // CartRouter.push(`/checkout?username=admin&PopProduct=${ProductIndex}`);
    console.log(ProductIndex)
    const newItem = {
      id: allProducts[ProductIndex].id,
      image: allProducts[ProductIndex].img,
      name: allProducts[ProductIndex].name,
      price: allProducts[ProductIndex], // Make sure to include the price property
      quantity,
      total: (allProducts[ProductIndex].price * quantity).toFixed(2), // Calculate the total based on price and quantity
    };

    // Update cartData array
    cartData.push(newItem);

    // Call addToCart from your context
    addToCart(newItem);

    // Retrieve existing cart items from local storage
    const storedCartItems = localStorage.getItem("cartItems");

    // Parse existing cart items or initialize an empty array
    const existingCartItems = storedCartItems
      ? JSON.parse(storedCartItems)
      : [];

    // Update local storage with the new item
    localStorage.setItem(
      "cartItems",
      JSON.stringify([...existingCartItems, newItem]),
    );
  };

  return (
    <div className="mt-[5%]">
      <div className=" ml-[5%]">
        <Link href="/home">
          {" "}
          <span className="text-sm text-gray-500 cursor-pointer hover:text-primary">
            Home /
          </span>
        </Link>
        <Link href="/catalog?username=admin&menuItems=">
          <span className="text-sm text-gray-500 cursor-pointer hover:text-primary">
            {" "}
            Catalog /
          </span>
        </Link>
        <span className="text-sm text-gray-500 cursor-pointer hover:text-primary">
          {" "}
          {allProducts[ProductIndex].name}
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-[60px] ">
        <div className="cols-span-1 flex lg:flex-col flex-row ">
          <div className="flex w-[80%] p-5 justify-center">
            <Image
              src={allProducts[ProductIndex].img}
              layout="responsive"
              width={50}
              height={50}
              alt="Hardware Image"
              className="lg:m-5 m-1  cursor-pointer "
            />
            {/* <StaticImage
              src="../ProductImages/Hardware04.jpg"
              className="lg:m-5 m-1  cursor-pointer "
            ></StaticImage> */}
          </div>
          <div className="flex lg:flex-row flex-col  gap-3 lg:w-full w-[20%] my-auto items-center lg:px-[5%]  h-auto">
            <div className="w-auto border hover:shadow-md border-black lg:p-3 p-1">
              <Image
                src={allProducts[ProductIndex].img}
                layout="responsive"
                width={100}
                height={100}
                alt="Hardware Image"
                className="hover:cursor-pointer"
              />
            </div>
            <div className="w-auto border hover:shadow-md border-black lg:p-3 p-1">
              <Image
                src={allProducts[ProductIndex].img}
                layout="responsive"
                width={100}
                height={100}
                alt="Hardware Image"
                className="hover:cursor-pointer"
              />
            </div>
            <div className="w-auto border hover:shadow-md border-black lg:p-3 p-1">
              <Image
                src={allProducts[ProductIndex].img}
                layout="responsive"
                width={100}
                height={100}
                alt="Hardware Image"
                className="hover:cursor-pointer"
              />
            </div>
            <div className="w-auto border hover:shadow-md border-black lg:p-3 p-1">
              <Image
                src={allProducts[ProductIndex].img}
                layout="responsive"
                width={100}
                height={100}
                alt="Hardware Image"
                className="hover:cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="cols-span-1">
          <div className="w-3/4 mt-5">
            <h1 className="lg:text-2xl text-xl text-black text-left font-bold cursor-pointer">
              {" "}
              {allProducts[ProductIndex].name}
            </h1>
          </div>
          <div className="w-3/4 mt-2">
            <p className="lg:text-sm text-xs text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="mt-5">
            <h6 className="font-semibold lg:text-md text-sm lg:mb-3 mb-1">
              {" "}
              Price:
            </h6>
            <p className="lg:text-xl text-md font-bold"> 0.00</p>
          </div>
          <div className="lg:my-5 my-2">
            <p className="font-semibold lg:text-md text-sm cursor-pointer">
              {" "}
              Sizes:
            </p>
            <div
              onClick={toggleDropdown}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === "Space") {
                  toggleDropdown();
                }
              }}
              role="button"
              tabIndex={0}
              className="border border-gray-400 p-1 px-2 flex items-between justify-between w-1/2 lg:mt-5 mt-1 cursor-pointer"
            >
              {selectedOption ? selectedOption : "Select Size"}
              {isOpen ? (
                <FaChevronDown className=" mt-1 hover:cursor-pointer" />
              ) : (
                <FaChevronUp className=" mt-1 hover:cursor-pointer" />
              )}
            </div>

            {/*   */}
            {isOpen && (
              <ul className="bg-white border border-gray-300 w-1/2 cursor-pointer shadow-lg">
                {options.map((option) => (
                  <li
                    key={option}
                    className={
                      ("p-2 cursor-pointer hover:bg-gray-200 text-end",
                      option === selectedOption && "bg-gray-200")
                    }
                  >
                    <button
                      type="button"
                      onClick={() => selectOption(option)}
                      className="w-full h-full"
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mt-5">
            <p className="font-semibold lg:text-md text-sm mb-3"> Colours: </p>
            <div className="flex flex-row gap-5">
              <button
                className="rounded-full cursor-pointer p-5 border border-gray-400"
                style={{ backgroundColor: "#ffcc99" }}
                aria-label="Color: Light Orange"
              ></button>
              <button
                className="rounded-full cursor-pointer p-5 border border-gray-400"
                style={{ backgroundColor: "#333333" }}
                aria-label="Color: Dark Gray"
              ></button>
              <button
                className="rounded-full cursor-pointer p-5 border border-gray-400"
                style={{ backgroundColor: "#666633" }}
                aria-label="Color: Olive Green"
              ></button>
            </div>
          </div>
          <div className="lg:mt-5 mt-3 w-3/4  ">
            <p className="font-semibold text-md mb-3"> Quantity: </p>
            <div className="flex flex-row lg:w-3/4 lg:justify-between justify-start gap-3">
              <div className="cols-span-1 rounded flex flex-row">
                <button
                  className="text-md px-[20px] text-gray-500 border border-gray-500 flex items-center justify-center"
                  onClick={decreaseQuantity}
                >
                  {" "}
                  -{" "}
                </button>

                <span className="text-md  border border-gray-500 px-[20px] text-lg flex items-center">
                  {" "}
                  {quantity}
                </span>
                <button
                  className="text-md px-[20px]   border border-gray-500  text-lg flex items-center"
                  onClick={increaseQuantity}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
              <div className="w-1/4 lg:w-full">
                <Link href="/checkout?username=admin">
                  <button
                    className="bg-black text-white font-semibold lg:text-sm text-xs text-center p-2 w-full"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderDivBlocks = (count) => {
  const divBlocks = [];
  for (let i = 0; i < 4; i++) {
    divBlocks.push(
      <div
        key={i}
        className="w-auto border hover:shadow-md border-black lg:p-3 p-1"
      >
        <Image
          src={allProducts[ProductIndex].img}
          layout="responsive"
          width={100}
          height={100}
          alt="Hardware Image"
          className="hover:cursor-pointer"
        />
      </div>,
    );
  }
  return divBlocks;
};

export default ProductOptions;
ProductOptions;
