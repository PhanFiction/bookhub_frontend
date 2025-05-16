import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link href={'/'} />Home</li>
        <li><Link href={'/signup'} />Signup</li>
        <li><Link href={'/login'} />Login</li>
        <li><Link href={'/logut'}>Logout</Link></li>
      </ul>
    </nav>
  )
}
