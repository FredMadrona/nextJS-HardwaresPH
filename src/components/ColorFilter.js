import React from "react";
import { useState } from "react";
import { FaChevronDown,FaChevronUp } from "react-icons/fa";


const ColorFilter = ({ selectedColors, handleFilterChange }) => {

    const [colorVisible, setColorVisible] = useState(false);
    
  const toggleColor = () => {
    setColorVisible(!colorVisible);
  };

    return (
        <div>
            <div className="accordion">
              <div className="accordion-section">
                <div
                  role="button"
                  tabIndex={0}
                  className="accordion-header flex justify-between align-center mb-3 cursor-pointer"
                  onClick={toggleColor}
                  onKeyPress={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      toggleColor();
                    }
                  }}
                >
                  <h2 className="font-semibold"> Color </h2>
                  {colorVisible ? (
                    <FaChevronDown className="mt-1 hover:cursor-pointer" />
                  ) : (
                    <FaChevronUp className="mt-1 hover:cursor-pointer" />
                  )}
                </div>

                <div
                  className={`accordion-content p-2 transition duration-300 ${
                    colorVisible ? "" : "hidden"
                  }`}
                >
                  <label className="flex items-center text-left">
                    <input
                      type="checkbox"
                      value="Black"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("Black")}
                    />
                    <span className="ml-2 text-gray-600 ">Black</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Navy"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("Navy")}
                    />
                    <span className="ml-2 text-gray-600 ">Navy</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Khaki"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("Khaki")}
                    />
                    <span className="ml-2 text-gray-600 ">Khaki</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Wheat"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("Wheat")}
                    />
                    <span className="ml-2 text-gray-600 ">Wheat</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Orange/Navy"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("Orange/Navy")}
                    />
                    <span className="ml-2 text-gray-600 ">Orange/Navy</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Yellow/Navy"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("Yellow/Navy")}
                    />
                    <span className="ml-2 text-gray-600 ">Yellow/Navy</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="White"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("White")}
                    />
                    <span className="ml-2 text-gray-600 ">White</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Orange"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("Orange")}
                    />
                    <span className="ml-2 text-gray-600 ">Orange</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Yellow"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("Yellow")}
                    />
                    <span className="ml-2 text-gray-600 ">Yellow</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="Stone"
                      onChange={(event) => handleFilterChange(event, "color")}
                      checked={selectedColors.includes("Stone")}
                    />
                    <span className="ml-2 text-gray-600 ">Stone</span>
                  </label>
                </div>
              </div>
            </div>
        </div>
    );
}

export default ColorFilter;