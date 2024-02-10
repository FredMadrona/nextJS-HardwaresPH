"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import withAuth from "@/hoc/withAuth";

function products() {
  return (
    <div>
      <Navbar />
      <HorizontalMenu />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default withAuth(products);
