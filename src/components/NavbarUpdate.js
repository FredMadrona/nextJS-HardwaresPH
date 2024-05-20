import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import LoginButton from "./LoginButton";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
const Nav = async () => {
  const session = await getServerSession(options);


  return (
    <nav className="  sticky top-0 w-full z-50 bg-white p-1 grid grid-cols-12 justify-between items-center gap-4 h-18 lg:px-1/4">
      {/* Column 1: Logo */}
      <div className="flex items-center justify-center pl-1 md:p-0 col-span-2 md:col-span-4 ">
        <Image
          src="/Hardware_Logo_Mobile.png"
          height={100} 
          width={100} 
          alt="Hardwares Logo"
        />
      </div>
      {/* End of Column 1 */}
      {/* Column 2: Search */}
      <div className="flex items center md:col-span-4 col-span-6">
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
  <div className="flex flex-no-wrap items-start justify-center md:p-1 py-4 lg:gap-10 md:gap-3 gap-3 w-full  col-span-4 ">    <LoginButton session={session} />
      </div>
      {/* End of Column 3 */}

    </nav>
  );
};

export default Nav;

// <div>My Site</div>
// <div className="flex gap-10">
//   <Link href="/">Home</Link>
//   <div>
//     <LoginButton session={session} />
//   </div>
// </div>
