"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { BsCart2, BsHeart, BsSearch } from "react-icons/bs";
import Link from "next/link";
import allProducts from "@/data/allProducts";
import { useSearchParams, useRouter } from "next/navigation";
import BrandFilter from "./BrandFilter";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";

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
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const [products, setProducts] = useState([]); // State for filtered products
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const filterProducts = () => {
      let filteredProducts = allProducts; // Assuming `allProducts` is the initial list of products

      // Filter by selected colors
      if (selectedColors.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          selectedColors.includes(product.color)
        );
      }

      // Filter by selected brands
      if (selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          selectedBrands.includes(product.brand)
        );
      }

      // Filter by selected features
      if (selectedFeatures.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          selectedFeatures.includes(product.feature)
        );
      }

      // Filter by selected category
      if (selectedCategory.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          selectedCategory.includes(product.category)
        );
      }

      // Filter by selected price range
      if (selectedPriceRange.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          selectedPriceRange.includes(product.priceRange)
        );
      }

      // Filter by selected menu items
      if (MenuItems !== "") {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === MenuItems
        );
      }

      // Filter by search query
      if (searchQuery) {
        filteredProducts = filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      // Update state with filtered products
      setProducts(filteredProducts);
    };

    filterProducts(); // Call the filter function when the component mounts or when filtering options are selected
  }, [
    selectedColors,
    selectedBrands,
    selectedFeatures,
    selectedCategory,
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
    } else if (filterType === "feature") {
      if (selectedFeatures.includes(value)) {
        setSelectedFeatures(
          selectedFeatures.filter((feature) => feature !== value)
        );
      } else {
        setSelectedFeatures([...selectedFeatures, value]);
      }
    } else if (filterType === "category") {
      if (selectedCategory.includes(value)) {
        setSelectedCategory(
          selectedCategory.filter((category) => category !== value)
        );
      } else {
        setSelectedCategory([...selectedCategory, value]);
      }
    } else if (filterType === "priceRange") {
      if (selectedPriceRange.includes(value)) {
        setSelectedPriceRange(
          selectedPriceRange.filter((priceRange) => priceRange !== value)
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
      <div className="bg-gray-100 p-4 grid grid-cols-9 gap-4 ">
        <div className="col-span-1"></div>
        {/* Filter Checkbox */}
        <div className=" col-span-3 lg:col-span-2 flex flex-col start  items-start">
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

        {/* Products */}
        <div className="col-span-5 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
