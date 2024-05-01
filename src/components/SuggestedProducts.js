import allProducts from "@/data/allProducts";
import React from "react";
import Image from "next/image";
import { BsHeart } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function SuggestedProducts() {
  const ProductRouter = useRouter();

  const PopProducts = allProducts.slice(0, 7); // Limit to only 6 products

  const handleAddToCartClick = (index) => {
    ProductRouter.push(`/product?username=admin&PopProduct=${index}`);
  };

  const productItems = [];
  for (let i = 0; i < PopProducts.length; i++) {
    // Starting from 0
    const item = PopProducts[i];
    productItems.push(
      <div
        key={i}
        className={`bg-white p-4 rounded hover:cursor-pointer border hover:shadow-lg ${i === PopProducts.length - 1 && "hidden lg:block"}`}
        onClick={() => handleAddToCartClick(i)}
      >
        <Image
          src={item.img}
          height={250}
          width={250}
          layout="responsive"
          alt={item.name}
        />
        <p className="text-sm text-gray-500 mb-3 h-10 pt-2 truncate md:truncate-none">
          {item.name}
        </p>
        <div className="flex justify-between lg:mb-3 lg:pt-1">
          <p className="text-sm font-bold ">{item.price}</p>
          <p>
            <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
          </p>
        </div>
      </div>,
    );
  }

  return (
    <div className="flex md:hidden bg-gray-100 w-auto">
      <div className="grid grid-cols-12 gap-4 bg-gray-100 pt-[25px] pb-[50px]">
        <div className="col-span-1"></div>
        <div className="col-span-10 grid md:grid-cols-4 grid-cols-2 justify-evenly gap-5">
          {productItems}
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}
