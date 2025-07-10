import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      const protectedRoutes = ['/save', '/edit-profile'];
      const isProtected = protectedRoutes.some(path =>
        nextUrl.pathname.startsWith(path)
      );

      if (isProtected) {
        return isLoggedIn; // block if not logged in
      }

      // redirect logged-in users away from login page
      if (isLoggedIn && nextUrl.pathname === '/login') {
        return Response.redirect(new URL('/', nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;