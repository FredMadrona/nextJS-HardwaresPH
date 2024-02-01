import React from "react";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import Footer from "@/components/Footer";
import ProductOptions from "@/components/ProductOptions";
import ProductDescriptions from "@/components/ProductDescriptions";

const AddToCart = () => {
  return (
    <div>
      <Navbar />
      <HorizontalMenu />
      <ProductOptions />
      <ProductDescriptions />
      <Footer />
    </div>
  );
};

export default AddToCart;
