"use client";
import React from "react";
import Nav from "@/components/NavbarUpdate";
import ImageSlider from "@/components/ImageSlider";
import ProductCards from "@/components/ProductCards";
import Footer from "@/components/Footer";

const Home = () => {


  return (
    <>
      <Nav/>
      <ImageSlider />
      <ProductCards />
      <Footer />
    </>
  );
};

export default Home;
