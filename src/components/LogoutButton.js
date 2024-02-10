import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear authentication data from localStorage or sessionStorage
    localStorage.removeItem("isLoggedIn");
    // Redirect to the login page
    router.push("/");
  };

  return (
    <button className="text-primary mr-5" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
