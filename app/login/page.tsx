

export default function Login() {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
        <div>
          <p>Don&apos;t have an account? <a href="/signup">Sign Up</a></p>
        </div>
        <div>
          <p>Or login with:</p>
          <button type="button" onClick={() => console.log('Google login')}>Google</button>
        </div>
      </form>
    </div>
  )
}