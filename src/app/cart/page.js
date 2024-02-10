"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductOptions from "@/components/ProductOptions";
import ProductDescriptions from "@/components/ProductDescriptions";
import Footer from "@/components/Footer";
import withAuth from "@/hoc/withAuth";


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



export default withAuth(cart);
