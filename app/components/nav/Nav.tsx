import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-gray-500 p-4">
      <ul className="flex gap-4">
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/book'}>Book Page</Link></li>
        <li><Link href={'/signup'}>Signup</Link></li>
        <li><Link href={'/login'}>Login</Link></li>
        <li><Link href={'/logout'}>Logout</Link></li>
      </ul>
    </nav>
  )
}
