"use client"
import React from "react";
import Image from "next/image";
import { BsTrash3 } from "react-icons/bs";

const CartItem = ({ item, onDecrease, onIncrease, onDelete }) => {
  const decreaseQuantity = () => {
    onDecrease();
  };

  const increaseQuantity = () => {
    onIncrease();
  };

  const handleDelete = () => {
    // Call onDelete to remove the item from the cartData
    onDelete(item.id);
  };

  return (
    <tr className="py-[100px] border border-b">
      <td>
        <Image
          src={item.image}
          width={100}
          height={100}
          alt="Item Image"
          className="md:h-[100px] md:w-[100px] h-[50px] w-[50px] m-5 p-5 border cursor-pointer"
        />
      </td>
      <td className="py-2 px-4 md:w-1/3 w-auto">
        <p className="md:text-sm text-xs text-start w-full text-gray-500">
          {item.name}
        </p>
      </td>
      <td className="py-3 lg:px-5 px-2 mx-5 flex flex-row justify-evenly align-center md:mt-[20%] mt-[12%] border border-gray-100">
        <button
          className="text-gray-500 px-2 lg:text-md text-sm text-center"
          onClick={decreaseQuantity}
        >
          -
        </button>
        <span className="mx-2 px-2 text-center lg:text-md text-sm">
          {item.quantity}
        </span>
        <button
          className=" text-gray-500 px-2 lg:text-md text-sm text-center"
          onClick={increaseQuantity}
        >
          +
        </button>
      </td>
      <td className="w-1/6">
        <p className="text-sm md:text-md lg:text-lg font-semibold text-center">
          P {item.total}
        </p>
      </td>
      {/* Delete Button */}
      <td className="w-1/6 m-5">
        <button onClick={handleDelete}>
          <BsTrash3 className="text-gray-400 cursor-pointer lg:m-5 m-2 mr-4" />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
