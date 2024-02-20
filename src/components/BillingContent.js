import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BillingContent = ({ updateCart }) => {
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
  const subtotal = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="w-full grid grid-cols-12  bg-gray-100 pt-5">
      <div className="col-span-1 "> </div>
      <div className="col-span-6 lg:col-span-5 w-full lg:justify-start justify-center flex rounded p-5 space-y-5">
        <div className="bg-white rounded md:w-[100%] w-full p-5">
          <div className="border-b border-gray-300 p-5">
            <h1 className="font-semibold text-xl pb-2 mb-10">
              Billing Address
            </h1>
            <div style={{ marginBottom: "20px" }}>
              <input
                className="text border border-gray-500  p-1 w-[40%] mr-2"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />{" "}
              <input
                className="text border border-gray-500  p-1 w-[40%]"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input
                className="text border border-gray-500  p-1 w-[82%]"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input
                className="text border border-gray-500  p-1 w-[82%]"
                type="tel"
                placeholder="Telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input
                className="text border border-gray-500  p-1 w-[82%]"
                type="text"
                placeholder="Address"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="text"
                className="text border border-gray-500  p-1 w-[82%]"
                placeholder="Address"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <select
                className="text border border-gray-500  p-1 w-[82%]"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="Philippines">Philippines</option>
                <option value="United States">United States</option>
                <option value="China">China</option>
                <option value="Japan">Japan</option>
              </select>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input
                className="text border border-gray-500  p-1 w-[40%] mr-2"
                type="text"
                placeholder="Barangay"
                value={barangay}
                onChange={(e) => setBarangay(e.target.value)}
              />{" "}
              <input
                className="text border border-gray-500  p-1 w-[40%]"
                type="text"
                placeholder="Zip/Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <select
                className="text border border-gray-500  p-1 w-[82%]"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="" disabled hidden>
                  State/Province
                </option>
                <option value="Bicol">Bicol</option>
                <option value="NCR">NCR</option>
              </select>
            </div>
            <div style={{ marginBottom: "50px" }}>
              <input
                className="text border border-gray-500  p-1 w-[82%]"
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
              <span className=" text-gray-500" style={{ marginRight: "23em" }}>
                Item
              </span>
              <span
                className="font-semibold text-xl text-gray-500"
                style={{ marginLeft: "auto" }}
              >
                Subtotal
              </span>
            </h1>
            {/* Dummy Product List */}
            {products.map((product, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <p className="text-gray-500">
                  {product.name} x {product.quantity}
                </p>
                <p className="text-gray-500">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div>
            <hr />
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-500 font-semibold">Subtotal</p>
              <p className="text-gray-500">${subtotal.toFixed(2)}</p>
            </div>
            <hr className="my-3 border-t border-gray-300" />
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-500 font-semibold">VAT</p>
              <p className="text-gray-500">0%</p>
            </div>
            <hr className="my-3 border-t border-gray-300" />
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-500 font-semibold">TOTAL</p>
              <p className="text-black">${subtotal.toFixed(2)}</p>
            </div>
            <div className="border-gray-300 p-5">
              <input
                placeholder=" Gift card or discount code"
                type="text"
                className="text border border-gray-500 bg-gray-100 p-1 w-[70%] mr-5"
              ></input>
              <button className="w-auto bg-black text-white md:text-sm text-xs font-semibold hover:shadow-sm p-2 px-5 ">
                {" "}
                Apply Coupon
              </button>
            </div>
            <div className="p-5 flex items-center">
              {/*Shipping choices*/}
              <div
                className="flex items-center mr-3"
                style={{ marginRight: "50px" }}
              >
                <input
                  type="radio"
                  name="shippingOption"
                  className="h-4 w-4 border border-gray-500 rounded-full mr-2"
                />
                <div>
                  <p className="text-gray-500">Regular post - FREE</p>
                  <p className="text-gray-500 ml-5">P 0.00</p>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="shippingOption"
                  className="h-4 w-4 border border-gray-500 rounded-full mr-2"
                />
                <div>
                  <p className="text-gray-500">Express Post - FREE</p>
                  <p className="text-gray-500 ml-5">P 0.00</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center mt-1 p-3">
              {/* PayPal button */}
              <button className="bg-yellow-300 hover:bg-yellow-400 h-1/4 w-[48%] hover:shadow-md rounded mt-1 flex items-center justify-center border mr-2">
                <Image
                  src="/paypalpng.png"
                  className="h-full w-auto m-3"
                  height={50}
                  width={50}
                  alt="paypal"
                />
              </button>
            </div>

            {/* Credit Card Payment button */}
            <div className="w-full flex justify-center mt-1 p-3">
              <button
                onClick={handleCreditCardButtonClick}
                className="bg-black text-white hover:bg-gray-800 h-16 w-[48%] hover:shadow-md rounded mt-1 flex items-center justify-center border"
              >
                <span className="text-md font-bold">Credit Card Payment</span>
              </button>
            </div>
            {/* Credit Card Dropdown */}
            <div
              className="pl-20"
              style={{ marginBottom: "20px", justifyContent: "center" }}
            >
              {showCreditCardDropdown && (
                <div className="mt-4">
                  <div style={{ marginBottom: "20px" }}>
                    <select
                      name="cardType"
                      className="text border border-gray-500 p-1 w-[82%]"
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
                  <div style={{ marginBottom: "20px" }}>
                    <input
                      name="nameOnCard"
                      className="text border border-gray-500 p-1 w-[82%]"
                      type="text"
                      placeholder="Name on Card"
                      value={creditCardInfo.nameOnCard}
                      onChange={handleCreditCardInputChange}
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <input
                      name="cardNumber"
                      className="text border border-gray-500 p-1 w-[82%]"
                      type="text"
                      placeholder="Credit Card Number"
                      value={creditCardInfo.cardNumber}
                      onChange={handleCreditCardInputChange}
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <p className="text-gray-500 font-semibold">
                      Expiration Date
                    </p>
                    <div className="flex">
                      <select
                        name="expiryMonth"
                        className="text border border-gray-500 p-1 w-[40%] mr-2"
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
                        {/* Add month options */}
                      </select>
                      <select
                        name="expiryYear"
                        className="text border border-gray-500 p-1 w-[40%]"
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
                        {/* Add year options */}
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <input
                      name="cvv"
                      className="text border border-gray-500 p-1 w-[82%]"
                      type="text"
                      placeholder="CVV"
                      value={creditCardInfo.cvv}
                      onChange={handleCreditCardInputChange}
                    />
                  </div>
                </div>
              )}
            </div>
            {/* Place Order button */}
            <div className="w-full flex justify-center mt-1 p-3">
              <button
                onClick={handlePlaceOrder}
                className="bg-red-600 hover:bg-red-700 h-16 w-[48%] hover:shadow-md rounded mt-1 flex items-center justify-center border"
              >
                <span className="text-white font-semibold text-md md:text-lg">
                  PLACE ORDER
                </span>
              </button>
            </div>

            {subscribeSuccess && (
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-green-500 text-white rounded z-50">
                <span className="font-bold">Your order has been placed!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingContent;
