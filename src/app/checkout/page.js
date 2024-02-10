"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";
import CartNavTrail from "@/components/CartNavTrail";
import CartContent from "@/components/CartContent";
import ShippingDetails from "@/components/ShippingDetails";
import Footer from "@/components/Footer";
import withAuth from "@/hoc/withAuth";

function checkout() {
  return (
    <div>
      <Navbar />
      <HorizontalMenu />
      <CartNavTrail />
      <CartContent />
      <ShippingDetails />
      <Footer />
    </div>
  );
}

export default withAuth(checkout);
