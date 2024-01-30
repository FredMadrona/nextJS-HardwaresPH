// pages/index.js
import Navbar from "@/components/Navbar";
import styles from "../pages/globals.css"; // Import the globals.css file
import ProductCards from "@/components/ProductCards";
import HorizontalMenu from "@/components/HorizontalMenu";
import ImageSlider from "@/components/ImageSlider";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HorizontalMenu />
      <ImageSlider/>
      <ProductCards/>
      <Footer/>
    </div>
  );
};

export default Homepage;
