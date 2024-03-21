import type { NextRequest } from "next/server";
import { getSessionData } from "./actions/auth";

export async function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("currentUser")?.value;

  //   if (currentUser && !request.nextUrl.pathname.startsWith("/dashboard")) {
  //     return Response.redirect(new URL("/dashboard", request.url));
  //   }

  //   if (!currentUser && !request.nextUrl.pathname.startsWith("/auth/signin")) {
  //     return Response.redirect(new URL("/auth/signin", request.url));
  //   }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
