"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CartItem from "./CartItem";

const MobileBillingContent = ({ updateCart }) => {
  const [subscribeSuccess, setSubscribeSuccess] = useState(false); // New state for notification
  const router = useRouter(); // Next.js router
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [country, setCountry] = useState("Philippines");
  const [barangay, setBarangay] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [company, setCompany] = useState("");
  const [createAccount, setCreateAccount] = useState(false);
  const [shipToSameAddress, setShipToSameAddress] = useState(false);
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardType: "",
    nameOnCard: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });
  const [showCreditCardDropdown, setShowCreditCardDropdown] = useState(false);

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleCreditCardButtonClick = () => {
    // Toggle visibility of the credit card dropdown
    setShowCreditCardDropdown(!showCreditCardDropdown);
  };

  const handleCreditCardInputChange = (e) => {
    const { name, value } = e.target;
    setCreditCardInfo({
      ...creditCardInfo,
      [name]: value,
    });
  };

  const handlePlaceOrder = () => {
    localStorage.removeItem("cartItems");
    updateCart([]);
    setSubscribeSuccess(true);
    setTimeout(() => {
      setSubscribeSuccess(false);
    }, 99999);
    router.push("/home?username=admin");
  };

  // Dummy product data
  const products = [
    { name: "Stainless Steel Bathroom Hardware", quantity: 1, price: 0.0 },
    { name: "Stainless Steel Bathroom Hardware", quantity: 1, price: 0.0 },
    { name: "Stainless Steel Bathroom Hardware", quantity: 1, price: 0.0 },
  ];
  return (
    <div className="container max-w-screen-md mx-auto lg:hidden">
      {/* Render only item name, quantity, and total */}
      {cartItems.map((item, index) => (
        <div key={index} className="flex items-center mb-4">
          <div className="flex items-center">
            <Image src={item.image} alt={item.name} className="w-12 h-12 mr-4" width={150} height={150}/>
            <div>
              <p className="text-gray-500 ">{item.name}</p>
              <p className="text-gray-500 font-semibold">
                ₱ {(item.price * item.quantity).toFixed(2)}
              </p>
              <p className="text-gray-500 font-semibold">
                Qty: {item.quantity}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center mb-2">
        <p className="text-gray-500 font-semibold">Subtotal: </p>
        <p className="text-gray-500">₱ {subtotal.toFixed(2)}</p>
      </div>
      <div className="border-gray-300 p-5">
        <input
          placeholder="Gift card or discount code"
          type="text"
          className="text border border-gray-500 bg-gray-100 p-1 w-full mb-3"
        />
        <button className="w-full bg-black text-white font-semibold py-2">
          Apply Coupon
        </button>
      </div>
      <div className="p-5 flex flex-col">
        {/*Shipping choices*/}
        <div className="flex items-center mb-3">
          <input
            type="radio"
            name="shippingOption"
            className="h-4 w-4 border border-gray-500 rounded-full mr-2"
          />
          <div>
            <p className="text-gray-500">Regular post - FREE</p>
            <p className="text-gray-500">P 0.00</p>
          </div>
        </div>
        <div className="flex items-center mb-3">
          <input
            type="radio"
            name="shippingOption"
            className="h-4 w-4 border border-gray-500 rounded-full mr-2"
          />
          <div>
            <p className="text-gray-500">Express Post - FREE</p>
            <p className="text-gray-500">P 0.00</p>
          </div>
        </div>
      </div>
      {/* PayPal and Credit Card buttons */}
      <div className="flex justify-between p-3">
        <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-2 flex-1 mr-2">
          PayPal
        </button>
        <button
          onClick={handleCreditCardButtonClick}
          className="bg-black text-white hover:bg-gray-800 font-semibold py-2 flex-1 ml-2"
        >
          Credit Card
        </button>
      </div>
      {/* Credit Card Dropdown */}
      {showCreditCardDropdown && (
        <div className="mt-4">
          <div className="mb-4">
            <select
              name="cardType"
              className="text border border-gray-500 p-1 w-full"
              value={creditCardInfo.cardType}
              onChange={handleCreditCardInputChange}
            >
              <option value="" disabled>
                Select Card Type
              </option>
              <option value="visa">Visa</option>
              <option value="mastercard">MasterCard</option>
              {/* Add more card types as needed */}
            </select>
          </div>
          <div className="mb-4">
            <input
              name="nameOnCard"
              className="text border border-gray-500 p-1 w-full"
              type="text"
              placeholder="Name on Card"
              value={creditCardInfo.nameOnCard}
              onChange={handleCreditCardInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              name="cardNumber"
              className="text border border-gray-500 p-1 w-full"
              type="text"
              placeholder="Credit Card Number"
              value={creditCardInfo.cardNumber}
              onChange={handleCreditCardInputChange}
            />
          </div>
          <div className="mb-4 flex">
            <select
              name="expiryMonth"
              className="text border border-gray-500 p-1 w-1/2 mr-2"
              value={creditCardInfo.expiryMonth}
              onChange={handleCreditCardInputChange}
            >
              <option value="" disabled>
                Select Month
              </option>
              <option value="expiryMonth">January</option>
              <option value="expiryMonth">February</option>
              <option value="expiryMonth">March</option>
              <option value="expiryMonth">April</option>
              <option value="expiryMonth">May</option>
              <option value="expiryMonth">June</option>
              <option value="expiryMonth">July</option>
              <option value="expiryMonth">August</option>
              <option value="expiryMonth">September</option>
              <option value="expiryMonth">October</option>
              <option value="expiryMonth">November</option>
              <option value="expiryMonth">December</option>
              {/* Month options */}
            </select>
            <select
              name="expiryYear"
              className="text border border-gray-500 p-1 w-1/2"
              value={creditCardInfo.expiryYear}
              onChange={handleCreditCardInputChange}
            >
              <option value="" disabled>
                Select Year
              </option>
              <option value="expiryYear">2024</option>
              <option value="expiryYear">2025</option>
              <option value="expiryYear">2026</option>
              <option value="expiryYear">2027</option>
              <option value="expiryYear">2028</option>
              <option value="expiryYear">2029</option>
              <option value="expiryYear">2030</option>
              {/* Year options */}
            </select>
          </div>
          <div className="mb-4">
            <input
              name="cvv"
              className="text border border-gray-500 p-1 w-full"
              type="text"
              placeholder="CVV"
              value={creditCardInfo.cvv}
              onChange={handleCreditCardInputChange}
            />
          </div>
        </div>
      )}

      {/* Place Order button */}
      <div className="p-3">
        <button
          onClick={handlePlaceOrder}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 w-full"
        >
          PLACE ORDER
        </button>
      </div>
      {subscribeSuccess && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-green-500 text-white rounded z-50">
          <span className="font-bold">Your order has been placed!</span>
        </div>
      )}
    </div>
  );
};

export default MobileBillingContent;
