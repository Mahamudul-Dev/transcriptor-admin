import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyAccessToken } from "@/lib/jwt"

// Paths that require authentication
const authPaths = ["/api/user", "/api/usage"]

// Paths that require admin access
const adminPaths = ["/api/admin", "/dashboard", "/modules", "/packages", "/users", "/logs"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path requires authentication
  const requiresAuth = authPaths.some((path) => pathname.startsWith(path))

  console.log(pathname);

  // Check if the path requires admin access
  const requiresAdmin = adminPaths.some((path) => pathname.startsWith(path))

  if (requiresAuth || requiresAdmin) {
    // Get the authorization header
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]
    const payload = verifyAccessToken(token)

    if (!payload) {
      return NextResponse.json({ success: false, message: "Invalid or expired token" }, { status: 401 })
    }

    // Check if admin access is required
    if (requiresAdmin && !payload.isAdmin) {
      return NextResponse.json({ success: false, message: "Admin access required" }, { status: 403 })
    }
  }

  return NextResponse.next()
}

// Configure the middleware to run only for specific paths
export const config = {
  matcher: ["/dashboard/:path*", "/users/:path*", "/logs/:path*"],
}
