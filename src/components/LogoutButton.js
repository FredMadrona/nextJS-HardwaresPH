import { useRouter } from "next/navigation";
import { BsBoxArrowRight } from "react-icons/bs"; // Assuming you're using React Icons for the logout icon

const LogoutButton = ({ isMobile }) => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear authentication data from localStorage or sessionStorage
    localStorage.removeItem("isLoggedIn");
    // Redirect to the login page
    router.push("/");
  };

  return (
    <button className="text-primary  mr-2 md:mr-1 lg:inline-flex" onClick={handleLogout}>
  
  <BsBoxArrowRight className="h-7 w-7  " />
  {/* <span className="hidden lg:flex ml-3"> Logout </span> */}
    </button>
  );
};

export default LogoutButton;
