import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === 'loading') return; // Do nothing while loading
      if (!session && status !== 'loading') {
        router.push('/'); // Redirect to home page if not authenticated
      }
    }, [session, status, router]);

    if (status === 'loading') {
      return <div>Loading...</div>; // Show a loading indicator while checking session
    }

    if (!session) {
      return <div>Please sign in to view your cart.</div>; // Show a message if not authenticated
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
