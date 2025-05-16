'use client';
import { jwtDecode } from 'jwt-decode';
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse  } from '@react-oauth/google';

// Make email unique but username not unique
type Credentials = {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  iss: string;
  jti: string;
  name: string;
  nbf: number;
  picture: string;
  sub: string;
}

const GoogleAuth = () => {
  const handleLoginSuccess = async (credentialResponse: CredentialResponse) => {
    const token = credentialResponse.credential;
    if (!token) {
      console.error('No credential returned from Google');
      return;
    }
    // Decode the JWT to see the user data
    const decoded = jwtDecode(token);
    console.log('Decoded Google token:', decoded);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
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

export default GoogleAuth;