import React from "react";
import { FaSort,FaFilter  } from "react-icons/fa";

const FilteringOptionsMobile = () => {
  return (
    <div className="md:hidden grid grid-cols-5 border w-full">
      <div className="col-span-1 m-2 border">
        <button className="bg-gray-200 shadow-sm text-blue-900 font-semibold text-xs text-center border w-full p-2 rounded hover:bg-gray-300 hover:text-blue-800 hover:shadow-md">
          Top Sales
        </button>
      </div>
      <div className="col-span-1 m-2 border flex items-center justify-center">
        <button className="bg-gray-200 shadow-sm text-blue-900 font-semibold text-xs text-center border w-full p-2 rounded hover:bg-gray-300 hover:text-blue-800 hover:shadow-md flex items-center justify-center">
          Price <FaSort className="ml-1" />
        </button>
      </div>
      <div className="col-span-1 m-2 border">
      <button className="bg-gray-200 shadow-sm text-blue-900 font-semibold text-xs text-center border w-full p-2 rounded hover:bg-gray-300 hover:text-blue-800 hover:shadow-md">
         Discount
        </button>
      </div>
      <div className="col-span-2 m-2 border">
      <button className="bg-gray-200 shadow-sm text-blue-900 font-semibold text-xs text-center border w-full p-2 rounded hover:bg-gray-300 hover:text-blue-800 hover:shadow-md flex items-center justify-center">
          More Options <FaFilter className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default FilteringOptionsMobile;
