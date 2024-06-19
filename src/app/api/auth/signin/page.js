import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import SignInForm from "@/components/SigninForm";

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
          <SignInForm />
        </>
      )}
    </>
  );
};

export default SignIn;
