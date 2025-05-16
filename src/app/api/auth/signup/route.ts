import { type NextRequest, NextResponse } from "next/server"
import * as bcrypt from "bcrypt"
import prisma from "@/lib/prisma"
import { signupSchema } from "@/lib/validations/auth"
import { generateAccessToken, generateRefreshToken } from "@/lib/jwt"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate input
    const result = signupSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "Invalid input", errors: result.error.errors },
        { status: 400 },
      )
    }

    const { email, password, fullName, profession, country, city, deviceId } = result.data

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json({ success: false, message: "User with this email already exists" }, { status: 409 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        fullName,
        profession,
        country,
        city,
        deviceId,
        isAdmin: false, // Regular users are not admins by default
      },
    })

    // Generate tokens
    const tokenPayload = {
      userId: newUser.id,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    }

    const accessToken = generateAccessToken(tokenPayload)
    const refreshToken = generateRefreshToken(tokenPayload)

    // Return user data (excluding password) and tokens
    const { password: _, ...userData } = newUser

    return NextResponse.json({
      success: true,
      message: "User registered successfully",
      user: userData,
      accessToken,
      refreshToken,
    })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ success: false, message: "An error occurred during registration" }, { status: 500 })
  }
}
