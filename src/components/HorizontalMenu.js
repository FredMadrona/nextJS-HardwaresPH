import React from "react";
import Link from "next/link";

const HorizontalMenu = () => {
  const menuItems = [
    "Door & Window",
    "Flooring",
    "Tile Products",
    "Smart Devices",
    "Outdoor Lighting",
    "Safety Products",
    "Pipeline",
    "LED Screen",
    "More",
  ];

  return (
    <nav className="w-full py-1 px-1 z-10 bg-primary md:grid hidden grid-cols-12">
      <div className="col-span-1"> </div>
      <div className="col-span-10 grid grid-cols-9 justify-evenly ml-5">
        {menuItems.map((item, index) => (
          <Link
            href="/"
            className="col-span-1 text-xs text-white text-center py-2 rounded-lg hover:text-gray-200 cursor-pointer"
            key={index}
          >
            {item}
          </Link>
        ))}
      </div>
      <div className="col-span-1"> </div>
    </nav>
  );
};

export default HorizontalMenu;
