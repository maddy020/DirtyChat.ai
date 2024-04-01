import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("next-auth.session-token")?.value || "";
  if (!token && path.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }
  if (token && path.startsWith("/api/auth")) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }
  if (token && path === "/admin/login")
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
