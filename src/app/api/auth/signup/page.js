import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import SignUpForm from "@/components/SignUpForm";

const SignIn = async () => {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <>
          Signed in 
        </>
      ) : (
        <>
          <SignUpForm/>
        </>
      )}
    </>
  );
};

export default SignIn;
