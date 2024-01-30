"use client";
import Navbar from "@/components/Navbar";
import HorizontalMenu from "@/components/HorizontalMenu";

// Use either the function keyword
function Homepage() {
  return (
    <div>
      <Navbar />
       <HorizontalMenu />
    </div>
  );
}

// Or the arrow function syntax
// const Homepage = () => {
//   return (
//     <div>
//       <Navbar />
//       <HorizontalMenu />

//     </div>
//   );
// }

export default Homepage;
