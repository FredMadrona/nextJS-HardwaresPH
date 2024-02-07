"use client";
import LoginPage from "@/components/LoginPage";
// Use either the function keyword
function Homepage() {
  return (
    <div>
   <LoginPage/>
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