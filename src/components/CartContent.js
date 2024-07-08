"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CartItem from "./CartItem";
import { fetcher } from "@/utils/fetcher";

const CartContent = ({ updateCart }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await fetcher("/cart");
        setCartItems(data.data);
      } catch (error) {
        console.error("Failed to fetch cart items", error);
        setError("Failed to fetch cart items. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleDecrease = async (index) => {
    const updatedCart = [...cartItems];
    const item = updatedCart[index];

    if (item.quantity > 1) {
      item.quantity -= 1;
      item.total_item_price = (
          parseFloat(item.total_item_price) - parseFloat(item.item_price)
      ).toFixed(2);

      setCartItems(updatedCart);
      updateCart(updatedCart);

      try {
        await fetcher(`/cart`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product_variant_id: item.product_variant_id,
            quantity: item.quantity,
          }),
        });
      } catch (error) {
        console.error("Failed to update cart", error);
      }
    }
  };

  const handleIncrease = async (index) => {
    const updatedCart = [...cartItems];
    const item = updatedCart[index];

    item.quantity += 1;
    item.total_item_price = (
        parseFloat(item.total_item_price) + parseFloat(item.item_price)
    ).toFixed(2);

    setCartItems(updatedCart);
    updateCart(updatedCart);

    try {
      await fetcher(`/cart`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_variant_id: item.product_variant_id,
          quantity: item.quantity,
        }),
      });
    } catch (error) {
      console.error("Failed to update cart", error);
    }
  };

  const handleDelete = async (itemId) => {
    const index = cartItems.findIndex(
        (item) => item.product_variant_id === itemId
    );

    if (index !== -1) {
      const updatedCart = [...cartItems];
      updatedCart.splice(index, 1);

      setCartItems(updatedCart);
      updateCart(updatedCart);

      try {
        await fetcher(`/cart/${itemId}`, {
          method: "DELETE",
        });
      } catch (error) {
        console.error("Failed to delete item from cart", error);
      }
    }
  };

  const subtotal = cartItems.reduce(
      (total, item) => total + parseFloat(item.total_item_price),
      0
  );
  const vat = 0; // You need to calculate VAT based on your business rules
  const grandTotal = subtotal + vat;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
      <div className="grid grid-cols-12 bg-gray-100">
        <div className="col-span-1"></div>
        <div className="col-span-10 flex flex-col lg:flex-row lg:p-5 gap-5 mt-2">
          <div className="w-auto lg:w-[90%] overflow-y-auto max-h-[70vh]">
            <table className="w-full bg-white rounded">
              <thead className="hidden md:hidden">
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
              <tbody>
              {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                      <CartItem
                          key={item.product_variant_id}
                          item={item}
                          onDecrease={() => handleDecrease(index)}
                          onIncrease={() => handleIncrease(index)}
                          onDelete={() => handleDelete(item.product_variant_id)}
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
            </table>
          </div>
          <div className="h-auto lg:w-[30%] md:w-[50%] w-[80%] mx-auto lg:mx-5">
            <div className="bg-white rounded py-3">
              <h3 className="font-bold md:text-xl text-lg mt-1 m-5 hidden md:block">
                Total
              </h3>
              <div className="hidden md:block">
                <div className="flex justify-between align-center border-b pb-2">
                <span className="text-gray-400 mx-5 mt-1 md:text-md text-sm hover:text-gray-600 cursor-pointer">
                  Subtotal
                </span>
                  <span className="text-black md:text-md text-sm mx-5 mt-1 font-bold cursor-pointer">
                  ₱ {subtotal.toFixed(2)}
                </span>
                </div>
                <div className="flex justify-between align-center border-b pb-2">
                <span className="text-gray-400 mx-5 mt-1 md:text-md text-sm hover:text-gray-600 cursor-pointer">
                  VAT
                </span>
                  <span className="text-black md:text-md text-sm mx-5 mt-1 font-bold cursor-pointer">
                  ₱ {vat.toFixed(2)}
                </span>
                </div>
                <div className="flex justify-between align-center border-b pb-2">
                <span className="text-gray-400 mx-5 mt-1 md:text-md text-sm hover:text-gray-600 cursor-pointer">
                  Grand Total
                </span>
                  <span className="text-black md:text-md text-sm mx-5 mt-1 font-bold cursor-pointer">
                  ₱ {grandTotal.toFixed(2)}
                </span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-full flex justify-center mt-5 p-3">
                  <button className="bg-yellow-300 hover:bg-yellow-400 h-1/4 hover:shadow-md rounded mt-1 flex items-center justify-center border w-full">
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
                  <p className="text-gray-300 text-center">or</p>
                </div>
              </div>
              {cartItems.length > 0 && (
                  <div className="w-full flex justify-center mt-1 p-3 md:block">
                    <Link href="/checkout?username=admin" className="w-full">
                      <button className="w-full bg-red-600 py-3 rounded border text-white hover:shadow-md hover:bg-red-700">
                        <p className="font-semibold hover:underline text-xs md:text-md">
                          PROCEED TO CHECKOUT
                        </p>
                      </button>
                    </Link>
                  </div>
              )}
            </div>
            <div className="hidden md:block">
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
        </div>
        <div className="col-span-1"></div>
      </div>
  );
};

export default CartContent;
