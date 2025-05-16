import { type NextRequest, NextResponse } from "next/server"
import * as bcrypt from "bcrypt"
import prisma from "@/lib/prisma"
import { loginSchema } from "@/lib/validations/auth"
import { generateAccessToken, generateRefreshToken } from "@/lib/jwt"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate input
    const result = loginSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "Invalid input", errors: result.error.errors },
        { status: 400 },
      )
    }

    const { email, password } = result.data

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    })

    // Check if user exists
    if (!user) {
      return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 401 })
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 401 })
    }

    // Update last login timestamp
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    })

    // Generate tokens
    const tokenPayload = {
      userId: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    }

    const accessToken = generateAccessToken(tokenPayload)
    const refreshToken = generateRefreshToken(tokenPayload)

    // Return user data (excluding password) and tokens
    const { password: _, ...userData } = user

    return NextResponse.json({
      success: true,
      message: "Login successful",
      user: userData,
      accessToken,
      refreshToken,
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ success: false, message: "An error occurred during login" }, { status: 500 })
  }
}
