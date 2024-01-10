// middleware.js
import { NextResponse } from "next/server";

export default function middleware(req:any) {
  // let loggedin = req.cookies.get('token');
  let loggedin = true;
  const { pathname } = req.nextUrl;

  if (loggedin && pathname === '/signin') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (!loggedin && pathname !== '/signin') {
    return NextResponse.redirect(new URL('/signin', req.url));
  }
}

export const config = {
  matcher: '/((?!api|static|.\\..|_next).*)',
};