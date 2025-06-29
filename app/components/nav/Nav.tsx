'use client';

import Link from 'next/link';
import Hamburger from '../hamburger';
import { useState } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="flex w-full items-center bg-gray-500 p-4">
      <Link href="/">
        <h1 className="text-3xl">BookHub</h1>
      </Link>
      {/* Hamburger Menu */}
      <div className="ml-auto">
        <Hamburger handleToggle={handleToggle} />
      </div>
      {
        isOpen && (
        <ul className="absolute top-15 right-6 flex flex-col gap-4 bg-black p-4 rounded-md z-1">
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/signup'}>Signup</Link></li>
          <li><Link href={'/login'}>Login</Link></li>
          <li><Link href={'/logout'}>Logout</Link></li>
        </ul>
        )
      }
    </nav>
  )
}
