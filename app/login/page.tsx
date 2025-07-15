'use client';
import { useState } from 'react';
import GoogleAuth from "../components/auth/GoogleAuth";
import { useActionState } from 'react';
import { authenticate } from '../lib/action';
import { useSearchParams } from 'next/navigation';
import { signIn } from "next-auth/react"

export default function Login() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  return (
    <div className="flex justify-center items-center h-screen p-4 scroll-auto z-4">
      <form 
        action={formAction} 
        method="POST" 
        className="z-1 w-full max-w-lg bg-amber-950 p-8 rounded-lg shadow-md space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1">Email:</label>
          <input type="email" id="email" name="email" className="border rounded p-2" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1">Password:</label>
          <input type="password" id="password" name="password" className="border rounded p-2" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        </div>

        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded hover:cursor-pointer"
          aria-disabled={isPending}
        >
          Login
        </button>
        <button onClick={() => signIn("google")}>Google Next</button>
        <GoogleAuth />
        <p className="text-left text-gray-500 mt-4 relative">
          Don&apos;t have an account? <a href="/signup" className="text-blue-500 hover:underline">Register</a>
        </p>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
        {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </form>
    </div>
  )
}