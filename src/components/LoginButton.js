// components/LoginButton.js
import Link from 'next/link';

const LoginButton = ({ session }) => {
    return session ? (
        <Link href="/api/auth/signout?callbackUrl=/"> Logout </Link>
    ) : (
        <Link href="/api/auth/signin"> Login </Link>
    );
};

export default LoginButton;
