import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartItem from "./CartItem";

const CartContent = ({ cartItems, updateCart }) => {
  const [cartItemsState, setCartItemsState] = useState(cartItems);

  const handleDecrease = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity -= 1;
    updateCart(updatedCart); // Update the state
  };

  const handleIncrease = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    updateCart(updatedCart); // Update the state
  };

  const handleDelete = (itemId) => {
    const index = cartItems.findIndex((item) => item.id === itemId); // Find the index of the item to remove
    if (index !== -1) {
      const updatedCart = [...cartItemsState];
      cartItems.splice(index, 1); // Remove the item at the found index
      updateCart(cartItems);
      setCartItemsState(updatedCart); // Update the cart with the modified array
    }
  };

  return (
    <div>
      <div className="grid grid-cols-12 bg-gray-100">
        <div className="cols-span-1"></div>
        <div className="col-span-10 flex flex-col lg:flex-row lg:p-5 gap-5   mt-2 ">
          <div className="w-auto lg:w-[90%]">
            <table className="w-full bg-white rounded">
              <thead>
                <tr className="lg:py-[100px] py-[50px] border-b border-black">
                  <th className="w-1/6"></th>
                  <th className="py-2 px-4 w-1/3 text-gray-500 font-semibold cursor-pointer hover:text-gray-800">
                    Item
                  </th>
                  <th className="py-2 px-4 w-1/3 text-gray-500 font-semibold cursor-pointer hover:text-gray-800">
                    Quantity
                  </th>
                  <th className="py-2 px-4 w-1/6 text-gray-500 font-semibold cursor-pointer hover:text-gray-800">
                    Total
                  </th>
                  <th className="w-1/6"></th>
                </tr>
              </thead>
              {/* Items in cart */}
              <tbody>
                {cartItems && cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onDecrease={() => handleDecrease(index)}
                      onIncrease={() => handleIncrease(index)}
                      onDelete={() => handleDelete(item.id)}
                    />
                  ))
                ) : (
                  <tr className="text-center py-10">
                    <td colSpan="5">
                      <p className="text-gray-400">Your cart is empty.</p>
                    </td>
                  </tr>
                )}
              </tbody>

              {/* end of items in cart */}
            </table>
          </div>
          <div className=" h-auto lg:w-[30%] md:w-[50%] w-[80%] mx-auto  lg:mx-5">
            <div className="bg-white rounded py-3">
              <h3 className="font-bold md:text-xl text-lg mt-1 m-5"> Total </h3>
              <div className="flex justify-between align-center border-b  pb-2">
                <span className="text-gray-400 mx-5 mt-1 md:text-md text-sm hover:text-gray-600 cursor-pointer ">
                  {" "}
                  Subtotal{" "}
                </span>
                <span className="text-black md:text-md text-sm mx-5 mt-1 font-bold cursor-pointer">
                  {" "}
                  0.00{" "}
                </span>
              </div>
              <div className="flex justify-between align-center border-b pb-2">
                <span className="text-gray-400 mx-5 mt-1 md:text-md text-sm hover:text-gray-600 cursor-pointer ">
                  {" "}
                  VAT{" "}
                </span>
                <span className="text-black md:text-md text-sm mx-5 mt-1 font-bold cursor-pointer">
                  {" "}
                  0{" "}
                </span>
              </div>
              <div className="flex justify-between align-center border-b pb-2">
                <span className="text-gray-400 mx-5 mt-1 md:text-md text-sm hover:text-gray-600 cursor-pointer ">
                  {" "}
                  Grand Total{" "}
                </span>
                <span className="text-black md:text-md text-sm mx-5 mt-1 font-bold cursor-pointer">
                  {" "}
                  0.00{" "}
                </span>
              </div>
              <div className=" w-full flex justify-center mt-5 p-3">
                <button className="bg-yellow-300 hover:bg-yellow-400 h-1/4 hover:shadow-md rounded  mt-1 flex items-center justify-center border w-full">
                  <Image
                    src="/paypalpng.png"
                    className="md:h-[25%] h-[20%] md:w-[25%] w-[20%] m-3"
                    height={50}
                    width={50}
                    alt="paypal"
                  />
                </button>
              </div>
              <div className="w-full my-1">
                <p className="text-gray-300 text-center"> or </p>
              </div>
              <div className="w-full flex justify-center mt-1 p-3">
                <Link href="/billing" className="w-full">
                  {" "}
                  <button className="w-full bg-red-600 py-3 rounded  border text-white hover:shadow-md hover:bg-red-700">
                    <p className="font-semibold hover:underline text-xs md:text-md">
                      PROCEED TO CHECKOUT
                    </p>
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full flex flex-row justify-center gap-1 mt-5">
              <Image
                src="/Paypal-logo.png"
                className="w-[50px] h-[30px] cursor-pointer object-cover"
                width={50}
                height={50}
                alt="Paypal"
              />
              <Image
                src="/Visa-logo.png"
                className="w-[50px] h-[30px] cursor-pointer object-cover"
                width={50}
                height={50}
                alt="Visa"
              />
              <Image
                src="/Mastercard-logo.png"
                className="w-[50px] h-[30px] cursor-pointer object-cover"
                width={50}
                height={50}
                alt="MasterCard"
              />
              <Image
                src="/AmericanExpressPng.png"
                className="w-[50px] h-[30px] cursor-pointer object-cover"
                width={50}
                height={50}
                alt="American Express"
              />
            </div>
          </div>
        </div>
        <div className="cols-span-1"></div>
      </div>
    </div>
  );
};

export default CartContent;
