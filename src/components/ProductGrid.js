"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaSort, FaFilter, FaTimes } from "react-icons/fa";
import { BsCart2, BsHeart, BsSearch } from "react-icons/bs";
import Link from "next/link";
import allProducts from "@/data/allProducts";
import { useSearchParams, useRouter } from "next/navigation";
import BrandFilter from "./BrandFilter";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
// import FilteringOptionsMobile from "./FilteringOptionsMobile";

const ProductGrid = () => {
  const CatalogRouter = useRouter();

  const handleCatalogToCart = (index) => {
    console.log(index);
    CatalogRouter.push(`/product?username=admin&PopProduct=${index}`);
  };

  const searchParams = useSearchParams();
  const MenuItems = searchParams.get("menuItems");

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const [products, setProducts] = useState([]); // State for filtered products
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const filterProducts = () => {
      let filteredProducts = allProducts; // Assuming `allProducts` is the initial list of products

      // Filter by selected colors
      if (selectedColors.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          selectedColors.includes(product.color),
        );
      }

      // Filter by selected brands
      if (selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          selectedBrands.includes(product.brand),
        );
      }

      // Filter by selected price range
      if (selectedPriceRange.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          selectedPriceRange.includes(product.priceRange),
        );
      }

      // Filter by selected menu items
      if (MenuItems !== "") {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === MenuItems,
        );
      }

      // Filter by search query
      if (searchQuery) {
        filteredProducts = filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      }

      // Update state with filtered products
      setProducts(filteredProducts);
    };

    filterProducts(); // Call the filter function when the component mounts or when filtering options are selected
  }, [
    selectedColors,
    selectedBrands,
    selectedPriceRange,
    MenuItems,
    searchQuery,
  ]);

  const handleFilterChange = (event, filterType) => {
    const value = event.target.value;

    // Create a new function to handle changes for different filter types
    if (filterType === "color") {
      if (selectedColors.includes(value)) {
        setSelectedColors(selectedColors.filter((color) => color !== value));
      } else {
        setSelectedColors([...selectedColors, value]);
      }
    } else if (filterType === "brand") {
      if (selectedBrands.includes(value)) {
        setSelectedBrands(selectedBrands.filter((brand) => brand !== value));
      } else {
        setSelectedBrands([...selectedBrands, value]);
      }
    } else if (filterType === "priceRange") {
      if (selectedPriceRange.includes(value)) {
        setSelectedPriceRange(
          selectedPriceRange.filter((priceRange) => priceRange !== value),
        );
      } else {
        setSelectedPriceRange([...selectedPriceRange, value]);
      }
    }
  };

  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Number of items to display per page
  const itemsPerPage = 9;

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Calculate the start and end index of the products to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the products array to get the products for the current page
  const currentProducts = products.slice(startIndex, endIndex);

  // Function to handle page changes
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="bg-gray-100 p-4 grid md:grid-cols-9 grid-cols-1 gap-4 items-start">
        <div className="md:col-span-1">
          <div className="bg-slate-100 px-5 pb-0 pt-5  md:hidden">
            <span className="text-2xl text-black font-bold ">{MenuItems}</span>
          </div>
        </div>
        {/* Filter Checkbox */}
        <div className=" col-span-3 lg:col-span-2 hidden md:flex flex-col start  items-start">
          <h3 className=" text-md text-left text-primary font-semibold cursor-pointer">
            Shopping Options
          </h3>
          <div className="space-y-2  mt-5 w-full pr-5 ">
            {/**Brand Container */}
            <BrandFilter
              selectedBrands={selectedBrands}
              handleFilterChange={handleFilterChange}
            />
            {/** Colour Container */}
            <ColorFilter
              selectedColors={selectedColors}
              handleFilterChange={handleFilterChange}
            />

            {/** Price */}
            <PriceFilter
              selectedPriceRange={selectedColors}
              handleFilterChange={handleFilterChange}
            />
          </div>
        </div>
        {/* Filtering options in Mobile Version */}
        <div className="md:hidden grid grid-cols-5 w-full relative">
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
            <button
              className="bg-gray-200 shadow-sm text-blue-900 font-semibold text-xs text-center border w-full p-2 rounded hover:bg-gray-300 hover:text-blue-800 hover:shadow-md flex items-center justify-center"
              onClick={toggleSidebar}
            >
              <FaFilter className="mr-2" /> More Options
            </button>
          </div>
          {sidebarOpen && (
            <div className="fixed inset-0 z-50">
              <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-md">
                <div className="flex justify-end p-2">
                  <button
                    className="text-gray-500 hover:text-gray-800"
                    onClick={toggleSidebar}
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="p-4 ">
                  {" "}
                  <span className="font-bold text-2xl text-blue-900">
                    {" "}
                    Filter{" "}
                  </span>
                  <div>
                    <div className="space-y-2  mt-5 w-full pr-5 ">
                      {/**Brand Container */}
                      <BrandFilter
                        selectedBrands={selectedBrands}
                        handleFilterChange={handleFilterChange}
                      />
                      {/** Colour Container */}
                      <ColorFilter
                        selectedColors={selectedColors}
                        handleFilterChange={handleFilterChange}
                      />
                      {/** Category Container */}
                      <CategoryFilter></CategoryFilter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Products */}
        <div className="md:col-span-5 flex flex-col justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded hover:cursor-pointer border hover:shadow-lg"
              >
                <Image
                  src={product.img}
                  height={100}
                  width={100}
                  layout="responsive"
                  alt={product.name}
                />
                {/* <Img fluid={product.img} alt={product.name} /> */}

                <p className="text-sm text-gray-500 mb-3 h-10">
                  {product.name}
                </p>
                <div className="flex justify-between mb-3">
                  <p className="text-sm font-semibold">{product.price}</p>
                  <p>
                    <BsHeart className="text-gray-500 hover:cursor-pointer hover:text-primary" />
                  </p>
                </div>

                <button
                  onClick={() => handleCatalogToCart(product.id)}
                  className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary"
                >
                  Add to cart <BsCart2 className="mx-2" />
                </button>
              </div>
            ))}
          </div>

          {/* Pagination buttons */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i + 1}
                className={`mx-2 p-3 rounded text-sm ${
                  i + 1 === currentPage
                    ? "bg-primary text-white "
                    : "bg-gray-300 "
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
