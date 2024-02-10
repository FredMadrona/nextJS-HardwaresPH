"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductGrid from "@/components/ProductGrid";
import withAuth from "@/hoc/withAuth";


function products() {
  return (
    <div>
     <Navbar />
       <HorizontalMenu />
      <ProductGrid/>
    </div>
  );
}



export default withAuth(products);
