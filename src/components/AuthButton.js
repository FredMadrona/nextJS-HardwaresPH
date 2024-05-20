import Link from 'next/link';

const AuthButton = ({ session }) => {
    return session ? (
        <Link href="/api/auth/signout?callbackUrl=/"> Logout </Link>
    ) : (
        <Link href="/api/auth/signin"> Login </Link>
    );
};

export default AuthButton;
