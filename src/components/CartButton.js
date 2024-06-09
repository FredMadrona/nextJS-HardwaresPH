import { BsCart2, BsPerson } from "react-icons/bs";
// import { getServerSession } from "next-auth";
// import { options } from "@/app/api/auth/[...nextauth]/options";

const CartButton = async () => {
  // const session = await getServerSession(options);

  // return session ? (
  //   <div className="flex justify-evenly items-center w-full ">
  //     <div>
  //       <BsPerson className="md:h-8 md:w-8 h-6 w-6  text-primary cursor-pointer " />
  //     </div>
  //     <div className="relative flex flex-row items-center mt-3 ">
  //       <svg
  //         className="md:h-10 md:w-10 h-8 w-8  text-primary cursor-pointer "
  //         fill="none"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth="2"
  //         viewBox="0 0 24 24"
  //       >
  //         <BsCart2 />
  //       </svg>
  //       {/* items in cart counter */}
  //       <span className="absolute top-0 right-0 -mt-3 -mr-1 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full md:text-sm text-xs">
  //         0
  //       </span>
  //     </div>
  //   </div>
  // ) : (
  <div className="hidden"> </div>;
  // );
};

export default CartButton;
