import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { BsCart2, BsHeart } from "react-icons/bs";
import Link from "next/link";

const ProductGrid = () => {
  const allProducts = [
    {
      id: 1,
      name: "Stainless Steel Bathroom Hardware Black",
      color: "Black",
      price: "1,000.00",
      priceRange: "above",
      brand: "X",
      feature: "X",
      category: "Q",
      img: "/Hardware03.jpg",
    },
    {
      id: 2,
      name: "Exposed Door Closer Series Navy",
      color: "Navy",
      price: "300.00",
      priceRange: "below",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware01.jpg",
    },
    {
      id: 3,
      name: "Intelligent Door Lock N6700 Khaki",
      color: "Khaki",
      price: "800.00",
      priceRange: "above",
      brand: "Z",
      feature: "E",
      category: "C",
      img: "/Hardware02.jpg",
    },
    {
      id: 4,
      name: "Stainless Steel Bathroom Hardware lock Wheat",
      color: "Wheat",
      price: "500.00",
      priceRange: "below",
      brand: "Y",
      feature: "Q",
      category: "B",
      img: "/Hardware03.jpg",
    },
    {
      id: 5,
      name: "Stainless Steel Bathroom Hardware White",
      color: "White",
      price: "1,000.00",
      priceRange: "above",
      brand: "X",
      feature: "W",
      category: "C",
      img: "/Hardware04.jpg",
    },
    {
      id: 6,
      name: "Stainless Steel Bathroom Hardware lock Yellow",
      color: "Yellow",
      price: "1,000.00",
      priceRange: "above",
      brand: "Z",
      feature: "E",
      category: "A",
      img: "/Hardware01.jpg",
    },
    {
      id: 7,
      name: "Exposed Door Closer Series Stone",
      color: "Stone",
      price: "500.00",
      brand: "X",
      feature: "Q",
      category: "C",
      img: "/Hardware02.jpg",
    },
    {
      id: 8,
      name: "Intelligent Door Lock N6700 Black",
      color: "Black",
      price: "300.00",
      priceRange: "below",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware03.jpg",
    },
    {
      id: 9,
      name: "Exposed Door Closer Series Khaki",
      color: "Khaki",
      price: "500.00",
      priceRange: "below",
      brand: "Z",
      feature: "E",
      category: "A",
      img: "/Hardware04.jpg",
    },
    {
      id: 10,
      name: "Stainless Steel Bathroom Hardware Yellow",
      color: "Yellow",
      price: "200.00",
      priceRange: "below",
      brand: "X",
      feature: "Q",
      category: "A",
      img: "/Hardware01.jpg",
    },
    {
      id: 11,
      name: "Exposed Door Closer Series Navy",
      color: "Navy",
      price: "300.00",
      priceRange: "below",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware02.jpg",
    },
    {
      id: 12,
      name: "Intelligent Door Lock N6700 Yellow",
      color: "Yellow",
      price: "400.00",
      priceRange: "below",
      brand: "Z",
      feature: "Z",
      category: "E",
      img: "/Hardware03.jpg",
    },
    {
      id: 13,
      name: "Stainless Steel Bathroom Hardware Black",
      color: "Black",
      price: "500.00",
      priceRange: "below",
      brand: "X",
      feature: "Q",
      category: "A",
      img: "/Hardware04.jpg",
    },
    {
      id: 14,
      name: "Exposed Door Closer Series Yellow",
      color: "Yellow",
      price: "600.00",
      priceRange: "above",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware01.jpg",
    },
    {
      id: 15,
      name: "Intelligent Door Lock N6700 Black",
      color: "Black",
      price: "700.00",
      priceRange: "above",
      brand: "Z",
      feature: "E",
      category: "C",
      img: "/Hardware02.jpg",
    },
    {
      id: 16,
      name: "Stainless Steel Bathroom Hardware Navy",
      color: "Navy",
      price: "800.00",
      priceRange: "above",
      brand: "X",
      feature: "Q",
      category: "A",
      img: "/Hardware04.jpg",
    },
    {
      id: 17,
      name: "Intelligent Door Lock N6700 Khaki",
      color: "Khaki",
      price: "400.00",
      priceRange: "below",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware01.jpg",
    },
    {
      id: 18,
      name: "Exposed Door Closer Series Khaki",
      color: "Khaki",
      price: "400.00",
      priceRange: "below",
      brand: "Z",
      feature: "E",
      category: "C",
      img: "/Hardware02.jpg",
    },
    {
      id: 19,
      name: "Stainless Steel Bathroom Hardware White",
      color: "White",
      price: "1000.00",
      priceRange: "above",
      brand: "X",
      feature: "Q",
      category: "A",
      img: "/Hardware03.jpg",
    },
    {
      id: 20,
      name: "Exposed Door Closer Series Yellow/Navy",
      color: "Yellow/Navy",
      price: "800.00",
      priceRange: "above",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware04.jpg",
    },
    {
      id: 21,
      name: "Intelligent Door Lock N6700 White",
      color: "White",
      price: "500.00",
      priceRange: "above",
      brand: "Z",
      feature: "E",
      category: "C",
      img: "/Hardware01.jpg",
    },
    {
      id: 22,
      name: "Stainless Steel Bathroom Hardware Orange",
      color: "Orange",
      price: "800.00",
      priceRange: "above",
      brand: "X",
      feature: "Q",
      category: "A",
      img: "/Hardware02.jpg",
    },
    {
      id: 23,
      name: "Exposed Door Closer Series Yellow",
      color: "Yellow",
      price: "500.00",
      priceRange: "above",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware03.jpg",
    },
    {
      id: 24,
      name: "Intelligent Door Lock N6700 Stone",
      color: "Stone",
      price: "1000.00",
      priceRange: "above",
      brand: "Z",
      feature: "E",
      category: "C",
      img: "/Hardware04.jpg",
    },
    {
      id: 25,
      name: "Stainless Steel Bathroom Hardware Black",
      color: "Black",
      price: "500.00",
      priceRange: "above",
      brand: "X",
      feature: "Q",
      category: "A",
      img: "/Hardware01.jpg",
    },
    {
      id: 26,
      name: "Exposed Door Closer Series Navy",
      color: "Navy",
      price: "1000.00",
      priceRange: "above",
      brand: "Z",
      feature: "W",
      category: "B",
      img: "/Hardware02.jpg",
    },
    {
      id: 27,
      name: "Intelligent Door Lock N6700 Khaki",
      color: "Khaki",
      price: "800.00",
      priceRange: "above",
      brand: "X",
      feature: "E",
      category: "C",
      img: "/Hardware03.jpg",
    },
    {
      id: 28,
      name: "Stainless Steel Bathroom Hardware Wheat",
      color: "Wheat",
      price: "1000.00",
      priceRange: "above",
      brand: "Y",
      feature: "Q",
      category: "A",
      img: "/Hardware04.jpg",
    },
    {
      id: 29,
      name: "Exposed Door Closer Series Orange/Navy",
      color: "Orange/Navy",
      price: "500.00",
      priceRange: "below",
      brand: "Z",
      feature: "W",
      category: "B",
      img: "/Hardware01.jpg",
    },
    {
      id: 30,
      name: "Intelligent Door Lock N6700 Yellow/Navy",
      color: "Yellow/Navy",
      price: "800.00",
      priceRange: "above",
      brand: "X",
      feature: "E",
      category: "C",
      img: "/Hardware02.jpg",
    },
    {
      id: 31,
      name: "Stainless Steel Bathroom Hardware White",
      color: "White",
      price: "1000.00",
      priceRange: "above",
      brand: "Y",
      feature: "Q",
      category: "A",
      img: "/Hardware03.jpg",
    },
    {
      id: 32,
      name: "Exposed Door Closer Series Orange",
      color: "Orange",
      price: "500.00",
      priceRange: "below",
      brand: "Y",
      feature: "Q",
      category: "A",
      img: "/Hardware03.jpg",
    },
    {
      id: 33,
      name: "Intelligent Door Lock N6700 Yellow",
      color: "Yellow",
      price: "800.00",
      priceRange: "above",
      brand: "Z",
      feature: "W",
      category: "B",
      img: "/Hardware04.jpg",
    },
    {
      id: 34,
      name: "Stainless Steel Bathroom Hardware Stone",
      color: "Stone",
      price: "1000.00",
      priceRange: "above",
      brand: "X",
      feature: "E",
      category: "C",
      img: "/Hardware01.jpg",
    },
    {
      id: 36,
      name: "Exposed Door Closer Series Black",
      color: "Black",
      price: "800.00",
      priceRange: "above",
      brand: "Y",
      feature: "Q",
      category: "A",
      img: "/Hardware02.jpg",
    },
    {
      id: 37,
      name: "Intelligent Door Lock N6700 Navy",
      color: "Navy",
      price: "1000.00",
      priceRange: "above",
      brand: "Z",
      feature: "W",
      category: "B",
      img: "/Hardware03.jpg",
    },
    {
      id: 38,
      name: "Intelligent Door Lock N6700 Orange",
      color: "Orange",
      price: "800.00",
      priceRange: "above",
      brand: "X",
      feature: "E",
      category: "C",
      img: "/Hardware04.jpg",
    },
    {
      id: 39,
      name: "Exposed Door Closer Series Series Orange",
      color: "Orange",
      price: "800.00",
      priceRange: "above",
      brand: "Y",
      feature: "Q",
      category: "A",
      img: "/Hardware01.jpg",
    },
    {
      id: 40,
      name: "Exposed Door Closer Series Series Orange",
      color: "Orange",
      price: "100.00",
      priceRange: "below",
      brand: "Z",
      feature: "W",
      category: "B",
      img: "/Hardware02.jpg",
    },
    {
      id: 41,
      name: "Stainless Steel Bathroom Hardware Orange",
      color: "Orange",
      price: "1,000.00",
      priceRange: "above",
      brand: "X",
      feature: "E",
      category: "C",
      img: "/Hardware03.jpg",
    },
    {
      id: 42,
      name: "Stainless Steel Bathroom Hardware Orange/Navy",
      color: "Orange/Navy",
      price: "1,000.00",
      priceRange: "above",
      brand: "Y",
      feature: "Q",
      category: "A",
      img: "/Hardware04.jpg",
    },
    {
      id: 43,
      name: "Stainless Steel Bathroom Hardware  Orange/Navy",
      color: "Orange/Navy",
      price: "800.00",
      priceRange: "above",
      brand: "Z",
      feature: "W",
      category: "B",
      img: "/Hardware01.jpg",
    },
    {
      id: 44,
      name: "Stainless Steel Bathroom Hardware Orange/Navy",
      color: "Orange/Navy",
      price: "300.00",
      priceRange: "below",
      brand: "X",
      feature: "E",
      category: "C",
      img: "/Hardware02.jpg",
    },
    {
      id: 45,
      name: "Stainless Steel Bathroom Hardware Stone",
      color: "Stone",
      price: "800.00",
      priceRange: "above",
      brand: "Y",
      feature: "Q",
      category: "A",
      img: "/Hardware03.jpg",
    },
    {
      id: 46,
      name: "Exposed Door Closer Series Series Orange",
      color: "Orange",
      price: "1,000.00",
      priceRange: "above",
      brand: "Z",
      feature: "W",
      category: "B",
      img: "/Hardware01.jpg",
    },
    {
      id: 47,
      name: "Exposed Door Closer Series Yellow/Navy",
      color: "Yellow/Navy",
      price: "800.00",
      priceRange: "above",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware04.jpg",
    },
    {
      id: 48,
      name: "Intelligent Door Lock N6700 White",
      color: "White",
      price: "500.00",
      priceRange: "below",
      brand: "Z",
      feature: "E",
      category: "C",
      img: "/Hardware01.jpg",
    },
    {
      id: 49,
      name: "Stainless Steel Bathroom Hardware Orange",
      color: "Orange",
      price: "800.00",
      priceRange: "above",
      brand: "X",
      feature: "Q",
      category: "A",
      img: "/Hardware02.jpg",
    },
    {
      id: 50,
      name: "Exposed Door Closer Series Orange/Navy",
      color: "Orange/Navy",
      price: "500.00",
      priceRange: "below",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware03.jpg",
    },
    {
      id: 51,
      name: "Intelligent Door Lock N6700 Yellow/Navy",
      color: "Yellow/Navy",
      price: "1,000.00",
      priceRange: "above",
      brand: "Z",
      feature: "E",
      category: "C",
      img: "/Hardware04.jpg",
    },
    {
      id: 52,
      name: "Stainless Steel Bathroom Hardware Wheat",
      color: "Wheat",
      price: "500.00",
      priceRange: "below",
      brand: "X",
      feature: "Q",
      category: "A",
      img: "/Hardware01.jpg",
    },
    {
      id: 53,
      name: "Stainless Steel Bathroom Hardware Orange/Navy",
      color: "Orange/Navy",
      price: "1,000.00",
      priceRange: "above",
      brand: "X",
      feature: "X",
      category: "Q",
      img: "/Hardware04.jpg",
    },
    {
      id: 54,
      name: "Exposed Door Closer Series Navy",
      color: "Navy",
      price: "500.00",
      priceRange: "below",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware01.jpg",
    },
    {
      id: 55,
      name: "Intelligent Door Lock N6700 Khaki",
      color: "Khaki",
      price: "800.00",
      priceRange: "above",
      brand: "Z",
      feature: "E",
      category: "C",
      img: "/Hardware02.jpg",
    },
    {
      id: 56,
      name: "Stainless Steel Bathroom Hardware lock Wheat",
      color: "Wheat",
      price: "500.00",
      priceRange: "below",
      brand: "Y",
      feature: "Q",
      category: "B",
      img: "/Hardware03.jpg",
    },
    {
      id: 57,
      name: "Stainless Steel Bathroom Hardware Orange/Navy",
      color: "Orange/Navy",
      price: "500.00",
      priceRange: "below",
      brand: "X",
      feature: "W",
      category: "C",
      img: "/Hardware04.jpg",
    },
    {
      id: 58,
      name: "Stainless Steel Bathroom Hardware lock Yellow",
      color: "Yellow",
      price: "100.00",
      priceRange: "below",
      brand: "Z",
      feature: "E",
      category: "A",
      img: "/Hardware01.jpg",
    },
    {
      id: 59,
      name: "Exposed Door Closer Series Stone",
      color: "Stone",
      price: "500.00",
      priceRange: "below",
      brand: "X",
      feature: "Q",
      category: "C",
      img: "/Hardware02.jpg",
    },
    {
      id: 60,
      name: "Intelligent Door Lock N6700 Black",
      color: "Black",
      price: "300.00",
      priceRange: "below",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware03.jpg",
    },
    {
      id: 61,
      name: "Exposed Door Closer Series Orange/Navy",
      color: "Orange/Navy",
      price: "500.00",
      priceRange: "below",
      brand: "Z",
      feature: "E",
      category: "A",
      img: "/Hardware04.jpg",
    },
    {
      id: 62,
      name: "Stainless Steel Bathroom Hardware Yellow/Navy",
      color: "Yellow/Navy",
      price: "200.00",
      priceRange: "below",
      brand: "X",
      feature: "Q",
      category: "A",
      img: "/Hardware01.jpg",
    },
    {
      id: 63,
      name: "Exposed Door Closer Series Orange/Navy",
      color: "Orange/Navy",
      price: "500.00",
      priceRange: "below",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware03.jpg",
    },
    {
      id: 64,
      name: "Intelligent Door Lock N6700 Yellow/Navy",
      color: "Yellow/Navy",
      price: "400.00",
      priceRange: "below",
      brand: "Z",
      feature: "E",
      category: "C",
      img: "/Hardware04.jpg",
    },
    {
      id: 65,
      name: "Stainless Steel Bathroom Hardware Wheat",
      color: "Wheat",
      price: "500.00",
      priceRange: "below",
      brand: "X",
      feature: "Q",
      category: "A",
      img: "/Hardware01.jpg",
    },
    {
      id: 66,
      name: "Stainless Steel Bathroom Hardware Orange/Navy",
      color: "Orange/Navy",
      price: "100.00",
      priceRange: "below",
      brand: "X",
      feature: "X",
      category: "Q",
      img: "/Hardware04.jpg",
    },
    {
      id: 67,
      name: "Exposed Door Closer Series Navy",
      color: "Navy",
      price: "500.00",
      priceRange: "below",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware01.jpg",
    },
    {
      id: 68,
      name: "Intelligent Door Lock N6700 Khaki",
      color: "Khaki",
      price: "800.00",
      priceRange: "above",
      brand: "Z",
      feature: "E",
      category: "C",
      img: "/Hardware02.jpg",
    },
    {
      id: 69,
      name: "Stainless Steel Bathroom Hardware lock Wheat",
      color: "Wheat",
      price: "500.00",
      priceRange: "below",
      brand: "Y",
      feature: "Q",
      category: "B",
      img: "/Hardware03.jpg",
    },
    {
      id: 70,
      name: "Stainless Steel Bathroom Hardware Orange/Navy",
      color: "Orange/Navy",
      price: "500.00",
      priceRange: "below",
      brand: "X",
      feature: "W",
      category: "C",
      img: "/Hardware04.jpg",
    },
    {
      id: 71,
      name: "Stainless Steel Bathroom Hardware lock Yellow",
      color: "Yellow",
      price: "100.00",
      priceRange: "below",
      brand: "Z",
      feature: "E",
      category: "A",
      img: "/Hardware01.jpg",
    },
    {
      id: 72,
      name: "Exposed Door Closer Series Stone",
      color: "Stone",
      price: "500.00",
      priceRange: "below",
      brand: "X",
      feature: "Q",
      category: "C",
      img: "/Hardware02.jpg",
    },
    {
      id: 73,
      name: "Intelligent Door Lock N6700 Black",
      color: "Black",
      price: "800.00",
      priceRange: "above",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware03.jpg",
    },
    {
      id: 74,
      name: "Exposed Door Closer Series Orange/Navy",
      color: "Orange/Navy",
      price: "500.00",
      priceRange: "below",
      brand: "Z",
      feature: "E",
      category: "A",
      img: "/Hardware04.jpg",
    },
    {
      id: 75,
      name: "Stainless Steel Bathroom Hardware Yellow/Navy",
      color: "Yellow/Navy",
      price: "200.00",
      priceRange: "below",
      brand: "X",
      feature: "Q",
      category: "A",
      img: "/Hardware01.jpg",
    },
    {
      id: 76,
      name: "Exposed Door Closer Series Orange/Navy",
      color: "Orange/Navy",
      price: "500.00",
      priceRange: "below",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware03.jpg",
    },
    {
      id: 77,
      name: "Intelligent Door Lock N6700 Yellow/Navy",
      color: "Yellow/Navy",
      price: "100.00",
      priceRange: "below",
      brand: "Z",
      feature: "E",
      category: "C",
      img: "/Hardware04.jpg",
    },
    {
      id: 78,
      name: "Stainless Steel Bathroom Hardware Wheat",
      color: "Wheat",
      price: "500.00",
      priceRange: "below",
      brand: "X",
      feature: "Q",
      category: "A",
      img: "/Hardware01.jpg",
    },
    {
      id: 79,
      name: "Stainless Steel Bathroom Hardware Orange/Navy",
      color: "Orange/Navy",
      price: "100.00",
      priceRange: "below",
      brand: "X",
      feature: "X",
      category: "Q",
      img: "/Hardware04.jpg",
    },
    {
      id: 80,
      name: "Exposed Door Closer Series Navy",
      color: "Navy",
      price: "500.00",
      priceRange: "below",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware01.jpg",
    },
    {
      id: 81,
      name: "Intelligent Door Lock N6700 Khaki",
      color: "Khaki",
      price: "800.00",
      priceRange: "above",
      brand: "Z",
      feature: "E",
      category: "C",
      img: "/Hardware02.jpg",
    },
    {
      id: 82,
      name: "Stainless Steel Bathroom Hardware lock Wheat",
      color: "Wheat",
      price: "700.00",
      priceRange: "above",
      brand: "Y",
      feature: "Q",
      category: "B",
      img: "/Hardware03.jpg",
    },
    {
      id: 83,
      name: "Stainless Steel Bathroom Hardware Orange/Navy",
      color: "Orange/Navy",
      price: "600.00",
      priceRange: "above",
      brand: "X",
      feature: "W",
      category: "C",
      img: "/Hardware04.jpg",
    },
    {
      id: 84,
      name: "Stainless Steel Bathroom Hardware lock Yellow",
      color: "Yellow",
      price: "1,000.00",
      priceRange: "above",
      brand: "Z",
      feature: "E",
      category: "A",
      img: "/Hardware01.jpg",
    },
    {
      id: 85,
      name: "Exposed Door Closer Series Stone",
      color: "Stone",
      price: "700.00",
      priceRange: "above",
      brand: "X",
      feature: "Q",
      category: "C",
      img: "/Hardware02.jpg",
    },
    {
      id: 86,
      name: "Intelligent Door Lock N6700 Black",
      color: "Black",
      price: "800.00",
      priceRange: "above",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware03.jpg",
    },
    {
      id: 87,
      name: "Exposed Door Closer Series Orange/Navy",
      color: "Orange/Navy",
      price: "600.00",
      priceRange: "above",
      brand: "Z",
      feature: "E",
      category: "A",
      img: "/Hardware04.jpg",
    },
    {
      id: 88,
      name: "Stainless Steel Bathroom Hardware Yellow/Navy",
      color: "Yellow/Navy",
      price: "700.00",
      priceRange: "above",
      brand: "X",
      feature: "Q",
      category: "A",
      img: "/Hardware01.jpg",
    },
    {
      id: 89,
      name: "Exposed Door Closer Series Orange/Navy",
      color: "Orange/Navy",
      price: "600.00",
      priceRange: "above",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware03.jpg",
    },
    {
      id: 90,
      name: "Intelligent Door Lock N6700 Yellow/Navy",
      color: "Yellow/Navy",
      price: "1,000.00",
      priceRange: "above",
      brand: "Z",
      feature: "E",
      category: "C",
      img: "/Hardware04.jpg",
    },
    {
      id: 91,
      name: "Stainless Steel Bathroom Hardware Wheat",
      color: "Wheat",
      price: "500.00",
      priceRange: "below",
      brand: "X",
      feature: "Q",
      category: "A",
      img: "/Hardware01.jpg",
    },
    {
      id: 92,
      name: "Stainless Steel Bathroom Hardware Orange/Navy",
      color: "Orange/Navy",
      price: "100.00",
      priceRange: "below",
      brand: "X",
      feature: "X",
      category: "Q",
      img: "/Hardware04.jpg",
    },
    {
      id: 93,
      name: "Exposed Door Closer Series Navy",
      color: "Navy",
      price: "500.00",
      priceRange: "below",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware01.jpg",
    },
    {
      id: 94,
      name: "Intelligent Door Lock N6700 Khaki",
      color: "Khaki",
      price: "400.00",
      priceRange: "below",
      brand: "Z",
      feature: "E",
      category: "C",
      img: "/Hardware02.jpg",
    },
    {
      id: 95,
      name: "Stainless Steel Bathroom Hardware lock Wheat",
      color: "Wheat",
      price: "400.00",
      priceRange: "below",
      brand: "Y",
      feature: "Q",
      category: "B",
      img: "/Hardware03.jpg",
    },
    {
      id: 96,
      name: "Stainless Steel Bathroom Hardware Orange/Navy",
      color: "Orange/Navy",
      price: "500.00",
      priceRange: "below",
      brand: "X",
      feature: "W",
      category: "C",
      img: "/Hardware04.jpg",
    },
    {
      id: 97,
      name: "Stainless Steel Bathroom Hardware lock Yellow",
      color: "Yellow",
      price: "1,000.00",
      priceRange: "above",
      brand: "Z",
      feature: "E",
      category: "A",
      img: "/Hardware01.jpg",
    },
    {
      id: 98,
      name: "Exposed Door Closer Series Stone",
      color: "Stone",
      price: "500.00",
      priceRange: "below",
      brand: "X",
      feature: "Q",
      category: "C",
      img: "/Hardware02.jpg",
    },
    {
      id: 99,
      name: "Intelligent Door Lock N6700 Black",
      color: "Black",
      price: "800.00",
      priceRange: "above",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware03.jpg",
    },
    {
      id: 100,
      name: "Exposed Door Closer Series Orange/Navy",
      color: "Orange/Navy",
      price: "500.00",
      priceRange: "below",
      brand: "Z",
      feature: "E",
      category: "A",
      img: "/Hardware04.jpg",
    },
    {
      id: 101,
      name: "Stainless Steel Bathroom Hardware White",
      color: "White",
      price: "100.00",
      priceRange: "below",
      brand: "X",
      feature: "Q",
      category: "A",
      img: "/Hardware03.jpg",
    },
    {
      id: 102,
      name: "Exposed Door Closer Series White",
      color: "White",
      price: "500.00",
      priceRange: "below",
      brand: "Z",
      feature: "E",
      category: "A",
      img: "/Hardware04.jpg",
    },
    {
      id: 103,
      name: "Exposed Door Closer Series White",
      color: "White",
      price: "500.00",
      priceRange: "below",
      brand: "X",
      feature: "Q",
      category: "C",
      img: "/Hardware02.jpg",
    },
    {
      id: 104,
      name: "Intelligent Door Lock N6700 White",
      color: "White",
      price: "800.00",
      priceRange: "above",
      brand: "Y",
      feature: "W",
      category: "B",
      img: "/Hardware03.jpg",
    },
    {
      id: 105,
      name: "Exposed Door Closer Series White",
      color: "White",
      price: "500.00",
      priceRange: "below",
      brand: "Z",
      feature: "E",
      category: "A",
      img: "/Hardware04.jpg",
    },
    {
      id: 106,
      name: "Exposed Door Closer Series Orange",
      color: "Orange",
      price: "500.00",
      priceRange: "below",
      brand: "Z",
      feature: "E",
      category: "A",
      img: "/Hardware04.jpg",
    },
  ];

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const [products, setProducts] = useState([]); // State for filtered products

  const filterProducts = () => {
    let filteredProducts = allProducts;

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
    // Filter by selected Feature
    if (selectedFeatures.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
          selectedFeatures.includes(product.feature),
      );
    }
    // Filter by selected category
    if (selectedCategory.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
          selectedCategory.includes(product.category),
      );
    }
    // Filter by selected Price Rage
    if (selectedPriceRange.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
          selectedPriceRange.includes(product.priceRange),
      );
    }

    setProducts(filteredProducts);
  };

  useEffect(() => {
    filterProducts(); // Call the filter function when the component mounts or when filtering options are selected
  }, [
    selectedColors,
    selectedBrands,
    selectedFeatures,
    selectedCategory,
    selectedPriceRange,
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
            selectedFeatures.filter((feature) => feature !== value),
        );
      } else {
        setSelectedFeatures([...selectedFeatures, value]);
      }
    } else if (filterType === "category") {
      if (selectedCategory.includes(value)) {
        setSelectedCategory(
            selectedCategory.filter((category) => category !== value),
        );
      } else {
        setSelectedCategory([...selectedCategory, value]);
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

  // for Accordion
  const [colorVisible, setColorVisible] = useState(false);
  const [brandVisible, setBrandVisible] = useState(false);
  const [priceVisible, setPriceVisible] = useState(false);
  const [featureVisible, setFeatureVisible] = useState(false);
  const [categoriesVisible, setCategoriesVisible] = useState(false);

  const toggleBrand = () => {
    setBrandVisible(!brandVisible);
  };

  const togglePrice = () => {
    setPriceVisible(!priceVisible);
  };

  const toggleFeature = () => {
    setFeatureVisible(!featureVisible);
  };

  const toggleCategories = () => {
    setCategoriesVisible(!categoriesVisible);
  };

  const toggleColor = () => {
    setColorVisible(!colorVisible);
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

              {/** Colour Container */}
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

              {/** Price */}
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
                          onChange={(event) =>
                              handleFilterChange(event, "priceRange")
                          }
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
                          onChange={(event) =>
                              handleFilterChange(event, "priceRange")
                          }
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

              {/** Feature */}
              <div className="accordion">
                <div className="accordion-section">
                  <div
                      role="button"
                      tabIndex={0}
                      className="accordion-header flex justify-between align-center mb-3 cursor-pointer"
                      onClick={toggleFeature}
                      onKeyPress={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          toggleFeature();
                        }
                      }}
                  >
                    <h2 className="font-semibold"> Features </h2>
                    {featureVisible ? (
                        <FaChevronDown className="mt-1 hover:cursor-pointer" />
                    ) : (
                        <FaChevronUp className="mt-1 hover:cursor-pointer" />
                    )}
                  </div>

                  <div
                      className={`accordion-content p-2 transition duration-300 ${
                          featureVisible ? "" : "hidden"
                      }`}
                  >
                    <label className="flex items-center text-left">
                      <input
                          type="checkbox"
                          value="Q"
                          onChange={(event) => handleFilterChange(event, "feature")}
                          checked={selectedFeatures.includes("Q")}
                      />
                      <span className="ml-2 text-gray-600 ">Feature Q</span>
                    </label>
                    <label className="flex items-center">
                      <input
                          type="checkbox"
                          value="W"
                          onChange={(event) => handleFilterChange(event, "feature")}
                          checked={selectedFeatures.includes("W")}
                      />
                      <span className="ml-2 text-gray-600 ">Feature W</span>
                    </label>
                    <label className="flex items-center">
                      <input
                          type="checkbox"
                          value="E"
                          onChange={(event) => handleFilterChange(event, "feature")}
                          checked={selectedFeatures.includes("E")}
                      />
                      <span className="ml-2 text-gray-600 ">Feature E</span>
                    </label>
                  </div>
                </div>
              </div>

              {/** Categories */}
              <div className="accordion">
                <div className="accordion-section">
                  <div
                      role="button"
                      tabIndex={0}
                      className="accordion-header flex justify-between align-center mb-3 cursor-pointer"
                      onClick={toggleCategories}
                      onKeyPress={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          toggleCategories();
                        }
                      }}
                  >
                    <h2 className="font-semibold"> Categories </h2>
                    {categoriesVisible ? (
                        <FaChevronDown className="mt-1 hover:cursor-pointer" />
                    ) : (
                        <FaChevronUp className="mt-1 hover:cursor-pointer" />
                    )}
                  </div>

                  <div
                      className={`accordion-content p-2 transition duration-300 ${
                          categoriesVisible ? "" : "hidden"
                      }`}
                  >
                    <label className="flex items-center text-left">
                      <input
                          type="checkbox"
                          value="A"
                          onChange={(event) =>
                              handleFilterChange(event, "category")
                          }
                          checked={selectedCategory.includes("A")}
                      />
                      <span className="ml-2 text-gray-600 ">Category A</span>
                    </label>
                    <label className="flex items-center">
                      <input
                          type="checkbox"
                          value="B"
                          onChange={(event) =>
                              handleFilterChange(event, "category")
                          }
                          checked={selectedCategory.includes("B")}
                      />
                      <span className="ml-2 text-gray-600 ">Category B</span>
                    </label>
                    <label className="flex items-center">
                      <input
                          type="checkbox"
                          value="C"
                          onChange={(event) =>
                              handleFilterChange(event, "category")
                          }
                          checked={selectedCategory.includes("C")}
                      />
                      <span className="ml-2 text-gray-600 ">Category C</span>
                    </label>
                  </div>
                </div>
              </div>
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
                    <Link href="/cart?username=admin">
                      <button className="font-semibold text-black rounded-lg text-sm border-gray-300 br-md  p-2 flex items-center justify-center w-full border hover:text-white hover:bg-primary">
                        Add to cart <BsCart2 className="mx-2" />
                      </button>
                    </Link>
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