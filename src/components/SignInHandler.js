'use client';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

const LoginButton = ({ email, password }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      const signInResult = await signIn('credentials', {
        email,
        password,
        redirect: false, // Prevent automatic redirection
      });

      console.log('SignIn Result:', JSON.stringify(signInResult, null, 2));

      if (signInResult.error) {
        setError(signInResult.error);
      } else {
        setResponse(signInResult);
        window.location.href = '/';
      }
    } catch (error) {
      console.error('An error occurred during sign in:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>Login</button>
      {/* {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
      {error && <p style={{ color: 'red' }}>{error}</p>} */}
    </div>
  );
};

export default LoginButton;
