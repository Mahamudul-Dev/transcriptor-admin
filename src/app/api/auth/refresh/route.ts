import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { verifyRefreshToken, generateAccessToken } from "@/lib/jwt"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { refreshToken } = body

    if (!refreshToken) {
      return NextResponse.json({ success: false, message: "Refresh token is required" }, { status: 400 })
    }

    // Verify refresh token
    const payload = verifyRefreshToken(refreshToken)
    if (!payload) {
      return NextResponse.json({ success: false, message: "Invalid refresh token" }, { status: 401 })
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
    })

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 })
    }

    // Generate new access token
    const accessToken = generateAccessToken({
      userId: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    })

    return NextResponse.json({
      success: true,
      message: "Token refreshed successfully",
      accessToken,
    })
  } catch (error) {
    console.error("Token refresh error:", error)
    return NextResponse.json({ success: false, message: "An error occurred during token refresh" }, { status: 500 })
  }
}
