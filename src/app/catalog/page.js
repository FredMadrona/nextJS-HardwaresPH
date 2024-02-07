"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

function products() {
  return (
    <div>
     <Navbar />
       <HorizontalMenu />
      <ProductGrid/>
      <Footer/>
    </div>
  );
}



export default products;