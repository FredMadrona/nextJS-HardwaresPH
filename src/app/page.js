"use client"
import React from 'react';
import Nav from "@/components/NavbarUpdate";
import ImageSlider from "@/components/ImageSlider";
import ProductCards from "@/components/ProductCards";
import Footer from "@/components/Footer";
import { useSession } from 'next-auth/react';

const Home = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Nav />
      <ImageSlider />
      <ProductCards />
      <Footer />
    </div>
  );
};

export default Home;
