'use client';
import { useState } from 'react';
import GoogleAuth from "../components/auth/GoogleAuth";

export default function Login() {
  const [formData, setFormData] = useState({
    email: 'tester@gmail.com',
    password: '12345',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // send data to the server
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      credentials: 'include', // include cookies for session management
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (!res.ok) {
      console.error('Login failed:', data);
      return;
    }
    // handle successful login, e.g., redirect or show a message
    console.log('Login successful:', data);
  };

  return (
    <div className="flex justify-center items-center h-screen p-4 scroll-auto z-4">
      <form 
        action="/login" 
        method="POST" 
        className="z-1 w-full max-w-lg bg-amber-950 p-8 rounded-lg shadow-md space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1">Email:</label>
          <input type="email" id="email" name="email" className="border rounded p-2" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1">Password:</label>
          <input type="password" id="password" name="password" className="border rounded p-2" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded hover:cursor-pointer"
        >
          Login
        </button>
        <GoogleAuth />
        <p className="text-left text-gray-500 mt-4 relative">
          Don&apos;t have an account? <a href="/signup" className="text-blue-500 hover:underline">Register</a>
        </p>
      </form>
    </div>
  )
}