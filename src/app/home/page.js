"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ImageSlider from "@/components/ImageSlider";
import ProductCards from "@/components/ProductCards";
import Footer from "@/components/Footer";
import withAuth from "@/hoc/withAuth";
// Use either the function keyword
function home() {
  return (
    <div>
      <Navbar />
      <HorizontalMenu />
      <ImageSlider />
      <ProductCards />
      <Footer />
    </div>
  );
}

export default withAuth(home);
