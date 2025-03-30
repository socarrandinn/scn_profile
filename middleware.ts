import { NextResponse, type NextRequest } from "next/server";
import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./next-i18next.config";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Initialize i18nRouter with request and i18n config
  const i18nRedirect = i18nRouter(request, i18nConfig);

  // === REDIRECT TO /about-me ===
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/about-me`, request.url));
  }

  // If the conditions are not met, continue with the request normally.
  return i18nRedirect;
}

// Apply middleware only to relevant routes
export const config = {
  matcher: [
    "/",
    "/(es|en)/:path*",
    "/((?!_next|_vercel|api|sitemap|.*\\..*).*)",
  ],
};
