import Link from 'next/link';
import SignOut from '@/app/components/auth/SignOut';
import NavMenu from './NavMenu';

export default function Nav() {

  return (
    <nav className="flex w-full items-center bg-gray-500 p-4">
      <Link href="/">
        <h1 className="text-3xl">BookHub</h1>
      </Link>
      <NavMenu>
        <SignOut />
      </NavMenu>
    </nav>
  )
}
