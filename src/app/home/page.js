"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductCards from "@/components/ProductCards";
import Footer from "@/components/Footer";
// Use either the function keyword
function home() {
  return (
    <div>
      <Navbar />
       <HorizontalMenu />
        <ProductCards/>    
        <Footer/>
    </div>
  );
}



export default home;
