import React from "react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const PriceFilter = ({ selectedPriceRange, handleFilterChange }) => {
  const [priceVisible, setPriceVisible] = useState(false);

  const togglePrice = () => {
    setPriceVisible(!priceVisible);
  };

  return (
    <div>
      <div className="accordion">
        <div className="accordion-section">
          <div
            role="button"
            tabIndex={0}
            className="accordion-header flex justify-between align-center mb-3 cursor-pointer"
            onClick={togglePrice}
            onKeyPress={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                togglePrice();
              }
            }}
          >
            <h2 className="font-semibold"> Price </h2>
            {priceVisible ? (
              <FaChevronDown className="mt-1 hover:cursor-pointer" />
            ) : (
              <FaChevronUp className="mt-1 hover:cursor-pointer" />
            )}
          </div>
          <div
            className={`accordion-content p-2 transition duration-300 ${
              priceVisible ? "" : "hidden"
            }`}
          >
            <label className="flex items-center text-left">
              <input
                type="checkbox"
                value="below"
                onChange={(event) => handleFilterChange(event, "priceRange")}
                checked={selectedPriceRange.includes("below")}
              />
              <span className="ml-2 text-gray-600 cursor-pointer">
                {" "}
                Below Php500.00{" "}
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="above"
                onChange={(event) => handleFilterChange(event, "priceRange")}
                checked={selectedPriceRange.includes("above")}
              />
              <span className="ml-2 text-gray-600 cursor-pointer ">
                {" "}
                Above Php500.00
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
