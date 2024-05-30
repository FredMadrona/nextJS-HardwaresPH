import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

const AuthButton = async () => {
  const session = await getServerSession(options);

  return session ? (
    <Link
      className="md:text-lg text-xs mt-1 font-semibold"
      href="/api/auth/signout?callbackUrl=/"
    >
      {" "}
      Logout{" "}
    </Link>
  ) : (
    <>
      <Link
        className="md:text-lg text-xs mt-1 font-semibold"
        href="/api/auth/signin"
      >
        {" "}
        Login{" "}
      </Link>
      <span className="md:text-lg text-xs mt-1 font-semibold md:mx-5 mx-2">
        {" "}
        |{" "}
      </span>
      <Link className="md:text-lg text-xs mt-1 font-semibold" href="#">
        {" "}
        Sign Up{" "}
      </Link>
    </>
  );
};

export default AuthButton;
