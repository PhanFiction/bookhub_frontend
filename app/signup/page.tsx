import React from 'react'
import GoogleAuth from '../components/auth/GoogleAuth'

export default function  Signup() {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Sign Up</button>
        <div>
          <p>Already have an account? <a href="/login">Login</a></p>
          <p>Or sign up with:</p>
          <GoogleAuth />
          <button type="button" onClick={() => console.log('Google sign up')}>Google</button>
        </div>
      </form>
    </div>
  )
}
