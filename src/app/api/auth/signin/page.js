import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import SignInForm from "@/components/SigninForm";

const SignIn = async() => {
  const session = await getServerSession(options);

  return (
    <>

      {session ? (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signIn(signOut)}>Sign out</button>
        </>
      ) : (
        <>
          <h1>Sign In</h1>
            <SignInForm/>
        </>
      )}
   
    </>
  );
};

export default SignIn;
