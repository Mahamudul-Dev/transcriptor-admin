import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getUserFromRequest } from "@/lib/auth"
import { z } from "zod"

// Schema for assigning a module to a user
const assignModuleSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  moduleId: z.string().min(1, "Module ID is required"),
  moduleTierId: z.string().min(1, "Module tier ID is required"),
  expiresAt: z.string().datetime().optional(),
})

// POST /api/admin/assign-module - Assign a module to a user (admin only)
export async function POST(req: NextRequest) {
  try {
    // Verify authentication and admin status
    const user = getUserFromRequest(req)
    if (!user) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    if (!user.isAdmin) {
      return NextResponse.json({ success: false, message: "Admin access required" }, { status: 403 })
    }

    const body = await req.json()

    // Validate input
    const result = assignModuleSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "Invalid input", errors: result.error.errors },
        { status: 400 },
      )
    }

    const { userId, moduleId, moduleTierId, expiresAt } = result.data

    // Check if the user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    })

    if (!existingUser) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 })
    }

    // Check if the module exists
    const existingModule = await prisma.moduleTier.findUnique({
      where: { id: moduleTierId, AND: { moduleId } },
    })

    if (!existingModule) {
      return NextResponse.json({ success: false, message: "Module not found" }, { status: 404 })
    }

    // Check if the user already has access to the module
    const existingAccess = await prisma.userModule.findFirst({
      where: {
        userId,
        moduleTierId: moduleId,
      },
    })

    if (existingAccess) {
      // Update the existing access
      const updatedAccess = await prisma.userModule.update({
        where: { id: existingAccess.id },
        data: {
          expiresAt: expiresAt ? new Date(expiresAt) : null,
        },
      })

      return NextResponse.json({
        success: true,
        message: "Module access updated successfully",
        userModule: updatedAccess,
      })
    }

    // Assign the module to the user
    const userModule = await prisma.userModule.create({
      data: {
        userId,
        moduleTierId,
        expiresAt: expiresAt ? new Date(expiresAt) : null,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Module assigned successfully",
      userModule,
    })
  } catch (error) {
    console.error("Error assigning module:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while assigning the module" },
      { status: 500 },
    )
  }
}
