import { useSession } from "next-auth/react";
import Link from "next/link";

const AuthButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  return session ? (
    <Link
      className="md:text-lg text-xs mt-1 font-semibold"
      href="/api/auth/signout?callbackUrl=/"
    >
      Logout
    </Link>
  ) : (
    <>
      <Link
        className="md:text-lg text-xs mt-1 font-semibold"
        href="/api/auth/signin"
      >
        Login
      </Link>
      <span className="md:text-lg text-xs mt-1 font-semibold md:mx-5 mx-2">
        |
      </span>
      <Link className="md:text-lg text-xs mt-1 font-semibold" href="/api/auth/signup">
        Sign Up
      </Link>
    </>
  );
};

export default AuthButton;
