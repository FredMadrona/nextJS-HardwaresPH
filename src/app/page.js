"use client"
import Nav from "@/components/NavbarUpdate";
import ImageSlider from "@/components/ImageSlider";
import ProductCards from "@/components/ProductCards";
import Footer from "@/components/Footer";
import Menu from "@/components/HorizontalMenu";

const Home = () => {
  return (
    <div>
      <Nav />
      <Menu/>
      <ImageSlider />
      <ProductCards />
      <Footer />
    </div>
  );
}

export default Home;
