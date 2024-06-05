"use client"
import React, { useState } from 'react';
import { signIn } from 'next-auth/react'; // Import signIn from NextAuth
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the default behavior of the form submission,
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    // Sign in using NextAuth signIn function
    const signInResult = signIn('credentials', {
      email,
      password,
      redirect: false, // Prevent redirect after sign in
    });
    console.log('SignIn Result:', JSON.stringify(signInResult, null, 2));
    if (signInResult.error) {
      setError(signInResult.error);
      setResponse(null);
    } else {
      router.push("/");
      setResponse(signInResult);
      setError(null);
      // Save token or perform further actions
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginPage;