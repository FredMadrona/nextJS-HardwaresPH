"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductGrid from "@/components/ProductGrid";


function products() {
  return (
    <div>
     <Navbar />
       <HorizontalMenu />
      <ProductGrid/>
    </div>
  );
}



export default products;