import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import AuthButton from "./AuthButton";
import Logo from "/public/images/Hardware_Logo_Mobile.png";
// import CartButton from "./CartButton";


export default function Nav () {
  return (
    <nav className="  sticky top-0 w-full z-50 bg-white p-1 grid grid-cols-12 justify-between items-center gap-4 h-18 lg:px-1/4 ">
      {/* Column 1: Logo */}
      <div className="flex items-center justify-center pl-1 md:p-0 col-span-2 md:col-span-3">
        <Image src={Logo} height="75" alt="Hardwares Logo" />
      </div>
      {/* End of Column 1 */}
      {/* Column 2: Search */}
      <div className="flex items center md:col-span-5  col-span-7 w-auto">
        <div className="relative flex items-start q w-full ">
          <input
            type="text"
            placeholder="Search Hardwares"
            className="w-full bg-gray-100 pl-3 pr-10 py-2 rounded-lg text-gray-700 focus:outline-none focus:border-blue-300 placeholder-primary text-sm"
          />
          <BsSearch className="absolute right-3 top-3 text-primary" />
        </div>
        {/* End of Column 2 */}
      </div>
      {/* Column 3: Login and Cart */}
      <div className="h-full md:col-span-4 col-span-3 flex items-center justify-center ">
        <div className="md:w-[40%] w-full ">
          {/* <CartButton /> */}
        </div>
        <div className="">
          <AuthButton />
        </div>
      </div>
      {/* End of Column 3 */}
    </nav>
  );
};

