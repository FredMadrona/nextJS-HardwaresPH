import React from "react";
import { useState } from "react";
import { FaChevronDown,FaChevronUp } from "react-icons/fa";

const BrandFilter = ({ selectedBrands, handleFilterChange }) => {

    const [brandVisible, setBrandVisible] = useState(false);

    const toggleBrand = () => {
        setBrandVisible(!brandVisible);
      };
    return (
        <div>
             <div className="accordion">
              <div className="accordion-section">
                <div
                  role="button"
                  tabIndex={0}
                  className="accordion-header flex justify-between align-center mb-3 cursor-pointer"
                  onClick={toggleBrand}
                  onKeyPress={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      toggleBrand();
                    }
                  }}
                >
                  <h2 className="font-semibold"> Brand </h2>
                  {brandVisible ? (
                    <FaChevronDown className="mt-1 hover:cursor-pointer" />
                  ) : (
                    <FaChevronUp className="mt-1 hover:cursor-pointer" />
                  )}
                </div>
                <div
                  className={`accordion-content p-2 transition duration-300 ${
                    brandVisible ? "" : "hidden"
                  }`}
                >
                  <label className="flex items-center text-left">
                    <input
                      type="checkbox"
                      value="X"
                      onChange={(event) => handleFilterChange(event, "brand")}
                      checked={selectedBrands.includes("X")}
                    />
                    <span className="ml-2 text-gray-600">X</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Y"
                      onChange={(event) => handleFilterChange(event, "brand")}
                      checked={selectedBrands.includes("Y")}
                    />
                    <span className="ml-2 text-gray-600 ">Y</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Z"
                      onChange={(event) => handleFilterChange(event, "brand")}
                      checked={selectedBrands.includes("Z")}
                    />
                    <span className="ml-2 text-gray-600 ">Z</span>
                  </label>
                </div>
              </div>
            </div>
        </div>
    );
}

export default BrandFilter;