'use client';
import { useState } from 'react';
import Link from 'next/link';
import Hamburger from '../hamburger';
import { ReactNode } from 'react';

type NavMenuProps = {
  children?: ReactNode;
};

export default function NavMenu({ children }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="ml-auto">
        <Hamburger handleToggle={handleToggle} />
      </div>
      {
        isOpen && (
        <ul className="absolute top-15 right-6 flex flex-col gap-4 bg-black p-4 rounded-md z-1">
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/save'}>Edit Profile</Link></li>
          <li><Link href={'/signup'}>Signup</Link></li>
          <li><Link href={'/login'}>Login</Link></li>
          { children }
        </ul>
        )
      }
    </>
  )
}
