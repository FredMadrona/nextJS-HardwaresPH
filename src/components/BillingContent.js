"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useSWR from 'swr';
import { fetcher } from "@/utils/fetcher";
import { useSession } from "next-auth/react";

const BillingContent = ({ updateCart }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
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

  const { data: cartData, error, mutate } = useSWR('/cart', fetcher);

  useEffect(() => {
    if (cartData) {
      localStorage.setItem("cartItems", JSON.stringify(cartData.data));
    }
  }, [cartData]);

  const subtotal = cartData?.data.reduce(
      (total, item) => total + parseFloat(item.total_item_price),
      0
  ).toFixed(2) || '0.00';
  const vat = 0; // You need to calculate VAT based on your business rules
  const grandTotal = (parseFloat(subtotal) + vat).toFixed(2);

  const handleCreditCardButtonClick = () => {
    setShowCreditCardDropdown(!showCreditCardDropdown);
  };

  const handleCreditCardInputChange = (e) => {
    const { name, value } = e.target;
    setCreditCardInfo({
      ...creditCardInfo,
      [name]: value,
    });
  };

  const handlePlaceOrder = async () => {
    try {
      // Get the cart items from local storage
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      console.log("Cart items:", cartItems);

      // Prepare data to be sent in the POST request
      const orderData = {
        items: cartItems,
        // Add other relevant data from the state if needed
      };

      // Send POST request to /cart/checkout using fetcher
      const response = await fetcher("/cart/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      console.log("Response data:", response);

      // Assuming a successful order is indicated by the message being 'Order create success'
      if (response.message === 'Order create success') {
        // If successful, clear the cart and update the state
        localStorage.removeItem("cartItems");
        updateCart([]);
        setSubscribeSuccess(true);
        setTimeout(() => {
          setSubscribeSuccess(false);
        }, 5000); // Adjust time as needed
        router.push("/"); // Redirect to home
      } else {
        // Handle unsuccessful responses
        console.error("Failed to place order:", response.message);
      }
    } catch (error) {
      // Handle any network or other errors
      console.error("An error occurred:", error);
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to fetch cart items. Please try again later.</div>;
  }

  return (
      <div className="hidden md:block">
        <div className="w-full grid grid-cols-12 bg-gray-100 pt-5">
          <div className="col-span-1"></div>
          <div className="col-span-6 lg:col-span-5 w-full lg:justify-start justify-center flex rounded p-5 space-y-5">
            <div className="bg-white rounded md:w-[100%] w-full p-5">
              <div className="border-b border-gray-300 p-5">
                <h1 className="font-semibold text-xl pb-2 mb-10">Billing Address</h1>
                {/* Billing Address Form */}
                <div style={{ marginBottom: "20px" }}>
                  <input
                      className="text border border-gray-500 p-1 w-[40%] mr-2"
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                      className="text border border-gray-500 p-1 w-[40%]"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <input
                      className="text border border-gray-500 p-1 w-[82%]"
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Add other form fields here */}
                <div style={{ marginBottom: "50px" }}>
                  <input
                      className="text border border-gray-500 p-1 w-[82%]"
                      type="text"
                      placeholder="Company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <label>
                    <input
                        style={{ marginRight: "10px" }}
                        type="checkbox"
                        checked={createAccount}
                        onChange={() => setCreateAccount(!createAccount)}
                    />
                    Create an account for later use
                  </label>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <label>
                    <input
                        style={{ marginRight: "10px" }}
                        type="checkbox"
                        checked={shipToSameAddress}
                        onChange={() => setShipToSameAddress(!shipToSameAddress)}
                    />
                    Ship to the same address
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-5 w-full lg:justify-start justify-center flex rounded p-5 space-y-5">
            <div className="bg-white rounded md:w-[100%] w-full p-5">
              <div className="border-b border-gray-300 pb-5">
                <h1 className="font-semibold text-xl pb-2 mb-5">
                <span className="text-gray-500" style={{ marginRight: "23em" }}>
                  Item
                </span>
                  <span className="font-semibold text-xl text-gray-500" style={{ marginLeft: "auto" }}>
                  Subtotal
                </span>
                </h1>
                {cartData?.data.map((item) => (
                    <div className="flex items-center justify-between" key={item.id}>
                      <div className="text-gray-500">
                        <p className="text-gray-500 text-sm">{item.name}</p>
                      </div>
                      <div className="flex items-center justify-end">
                        <span className="text-gray-500 text-sm">x {item.quantity}</span>
                        <span className="text-gray-500 text-sm ml-4">
                      ₱{parseFloat(item.total_item_price).toFixed(2)}
                    </span>
                      </div>
                    </div>
                ))}
              </div>
              <div className="flex items-center justify-between py-5">
                <h1 className="font-semibold text-gray-500 text-lg">Subtotal</h1>
                <h1 className="font-semibold text-gray-500 text-lg">₱{subtotal}</h1>
              </div>
              <div className="flex items-center justify-between py-5">
                <h1 className="font-semibold text-gray-500 text-lg">VAT</h1>
                <h1 className="font-semibold text-gray-500 text-lg">₱{vat.toFixed(2)}</h1>
              </div>
              <div className="flex items-center justify-between py-5">
                <h1 className="font-semibold text-gray-500 text-lg">Grand Total</h1>
                <h1 className="font-semibold text-gray-500 text-lg">₱{grandTotal}</h1>
              </div>
              <div className="flex items-center justify-between py-5">
                <button
                    className="bg-[#040404] text-white w-full p-2 rounded-md"
                    onClick={handleCreditCardButtonClick}
                >
                  Proceed with Credit Card
                </button>
              </div>
              {showCreditCardDropdown && (
                  <div className="border-t border-gray-300 pt-5">
                    <div className="mb-5">
                      <select
                          name="cardType"
                          value={creditCardInfo.cardType}
                          onChange={handleCreditCardInputChange}
                          className="text border border-gray-500 p-1 w-[82%]"
                      >
                        <option value="">Select Card Type</option>
                        <option value="Visa">Visa</option>
                        <option value="MasterCard">MasterCard</option>
                        <option value="AmEx">American Express</option>
                      </select>
                    </div>
                    <div className="mb-5">
                      <input
                          className="text border border-gray-500 p-1 w-[82%]"
                          type="text"
                          placeholder="Name on Card"
                          name="nameOnCard"
                          value={creditCardInfo.nameOnCard}
                          onChange={handleCreditCardInputChange}
                      />
                    </div>
                    <div className="mb-5">
                      <input
                          className="text border border-gray-500 p-1 w-[82%]"
                          type="text"
                          placeholder="Card Number"
                          name="cardNumber"
                          value={creditCardInfo.cardNumber}
                          onChange={handleCreditCardInputChange}
                      />
                    </div>
                    <div className="flex mb-5">
                      <input
                          className="text border border-gray-500 p-1 w-[40%] mr-2"
                          type="text"
                          placeholder="Expiry Month"
                          name="expiryMonth"
                          value={creditCardInfo.expiryMonth}
                          onChange={handleCreditCardInputChange}
                      />
                      <input
                          className="text border border-gray-500 p-1 w-[40%]"
                          type="text"
                          placeholder="Expiry Year"
                          name="expiryYear"
                          value={creditCardInfo.expiryYear}
                          onChange={handleCreditCardInputChange}
                      />
                    </div>
                    <div className="mb-5">
                      <input
                          className="text border border-gray-500 p-1 w-[82%]"
                          type="text"
                          placeholder="CVV"
                          name="cvv"
                          value={creditCardInfo.cvv}
                          onChange={handleCreditCardInputChange}
                      />
                    </div>
                    <button
                        className="bg-[#040404] text-white w-full p-2 rounded-md"
                        onClick={handlePlaceOrder}
                    >
                      Place Order
                    </button>
                  </div>
              )}
              {subscribeSuccess && (
                  <div className="bg-green-500 text-white p-2 rounded-md mt-5">
                    Order placed successfully!
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
  );
};

export default BillingContent;
