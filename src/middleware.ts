import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Spam/hacked URL patterns to block (redirect to homepage)
const SPAM_PATTERNS = [
  /^\/pcmypage/,
  /^\/safe_search/,
  /^\/zhHant\//,
  /^\/lwnwt\//,
  /^\/kkx\//,
  /^\/send-mail$/,
  /^\/toiawase$/,
  /^\/wp-content\//,
  /^\/feature\//,
  /^\/hobby\//,
  /\/feed\/?$/,
  /\.html$/,
  /\?callback=/,
  /\?campaign_uid=/,
  /\/product\/detail\//,
  /\/surugaya\//,
];

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  // Block spam/hacked URLs - redirect to homepage with 301
  const fullPath = pathname + search;
  for (const pattern of SPAM_PATTERNS) {
    if (pattern.test(fullPath) || pattern.test(pathname)) {
      return NextResponse.redirect(new URL("/", request.url), 301);
    }
  }

  // Redirect non-www to www (production only)
  if (host === "zaimdigital.com") {
    const url = new URL(request.url);
    url.host = "www.zaimdigital.com";
    url.port = ""; // Remove port for production
    return NextResponse.redirect(url.toString(), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
