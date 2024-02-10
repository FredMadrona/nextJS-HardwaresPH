"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductOptions from "@/components/ProductOptions";
import ProductDescriptions from "@/components/ProductDescriptions";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";
function cart() {
  return (
    <div>
      <CartProvider>
      <Navbar />
       <HorizontalMenu />
       <ProductOptions />
      <ProductDescriptions />
      <Footer/>
      </CartProvider>
    </div>
  );
}



export default cart;
