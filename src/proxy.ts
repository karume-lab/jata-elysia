import { type NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const isDashboard = pathname.startsWith("/dashboard");
  const isTodos = pathname.startsWith("/todos");
  const isAuthPage =
    pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up");
  const isRoot = pathname === "/";

  // If not logged in and trying to access protected routes
  if (!session && (isDashboard || isTodos)) {
    const callbackUrl = encodeURIComponent(
      request.nextUrl.pathname + request.nextUrl.search,
    );
    return NextResponse.redirect(
      new URL(`/sign-in?callbackUrl=${callbackUrl}`, request.url),
    );
  }

  // If logged in and trying to access auth pages or root
  if (session && (isAuthPage || isRoot)) {
    return NextResponse.redirect(new URL("/todos", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
