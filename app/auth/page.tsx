/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { jwtDecode } from 'jwt-decode';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

// Make email unique but username not unique
const Login = () => {
  const handleLoginSuccess = async (credentialResponse: any) => {
    const token = credentialResponse.credential;
    // Decode the JWT to see the user data
    const decoded = jwtDecode(token);
    console.log('Decoded Google token:', decoded);

    try {
      const res = await fetch('http://localhost:8080/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
        credentials: 'include', // only include if your Go backend uses cookies
      });

      if (!res.ok) throw new Error('Failed to authenticate');

      const data = await res.json();
      console.log(data); // handle session/jwt etc.
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''}>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={() => console.log('Login Failed')}
      />
    </GoogleOAuthProvider>
  );
};

export default Login;