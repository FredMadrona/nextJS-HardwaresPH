"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";
function products() {
  return (
    <div>
      <CartProvider>
     <Navbar />
       <HorizontalMenu />
      <ProductGrid/>
      <Footer/>
      </CartProvider>
    </div>
  );
}



export default products;
