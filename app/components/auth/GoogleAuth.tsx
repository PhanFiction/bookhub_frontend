'use client';
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse  } from '@react-oauth/google';

const GoogleAuth = () => {
  const handleLoginSuccess = async (credentialResponse: CredentialResponse) => {
    const token = credentialResponse.credential;

    if (!token) {
      console.error('No credential returned from Google');
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/google-auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
        credentials: 'include', // only include if your backend uses cookies
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