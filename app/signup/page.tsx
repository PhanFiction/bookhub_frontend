'use client';
import { useState } from 'react';
import GoogleAuth from '../components/auth/GoogleAuth';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password, confirm_password } = formData;
    if (password !== confirm_password) {
      alert('Passwords do not match');
      return;
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
        credentials: 'include'
      });

      if (!res.ok) {
        const contentType = res.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
          const errorData = await res.json();
          throw new Error(errorData.message || 'Signup failed');
        } else {
          const text = await res.text(); // plain text error fallback
          throw new Error(text || 'Signup failed');
        }
      }

      const data = await res.json();
      console.log('Signup successful:', data);
      // Handle successful signup (e.g., redirect or show success message)
    } catch (error: unknown) {
      console.error('Error signing up:', error);
      alert((error as Error).message || 'An error occurred during signup');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen p-4 scroll-auto z-4">
      <form 
        action="/signup" 
        method="POST" 
        className="z-1 w-full max-w-lg bg-amber-950 p-8 rounded-lg shadow-md space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1">Username:</label>
          <input type="text" id="username" name="username" className="border rounded p-2" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1">Username:</label>
          <input type="text" id="name" name="name" className="border rounded p-2" value={formData.username} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1">Email:</label>
          <input type="email" id="email" name="email" className="border rounded p-2" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1">Password:</label>
          <input type="password" id="password" name="password" className="border rounded p-2" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="confirm_password" className="mb-1">Confirm Password:</label>
          <input type="password" id="confirm_password" name="confirm_password" className="border rounded p-2" value={formData.confirm_password} onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })} />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded hover:cursor-pointer"
        >
          Create Account
        </button>
        <GoogleAuth />
        <p className="text-left text-gray-500 mt-4 relative">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </form>
    </div>
  )
}
