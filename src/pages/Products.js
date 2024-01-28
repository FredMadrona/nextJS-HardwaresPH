// pages/index.js
import Navbar from "@/components/Navbar";
import styles from "../pages/globals.css"; // Import the globals.css file
import ProductCards from "@/components/ProductCards";
import HorizontalMenu from "@/components/HorizontalMenu";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div>
      <Navbar />
      <HorizontalMenu />
      <ProductCards/>
      <Footer/>
    </div>
  );
};

export default Products;
