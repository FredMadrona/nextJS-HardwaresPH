// pages/index.js
import Navbar from "@/components/Navbar";
import styles from "../pages/globals.css"; // Import the globals.css file
import HorizontalMenu from "@/components/HorizontalMenu";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <HorizontalMenu />
      <ProductGrid/>
      <Footer/>
    </div>
  );
};

export default ProductPage;
