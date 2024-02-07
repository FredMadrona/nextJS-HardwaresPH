"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductOptions from "@/components/ProductOptions";
import ProductDescriptions from "@/components/ProductDescriptions";
import Footer from "@/components/Footer";

function cart() {
  return (
    <div>
     <Navbar />
       <HorizontalMenu />
       <ProductOptions />
      <ProductDescriptions />
      <Footer/>
    </div>
  );
}



export default cart;