import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getUserFromRequest } from "@/lib/auth"

// GET /api/user/modules - Get modules the user has access to
export async function GET(req: NextRequest) {
  try {
    // Verify authentication
    const user = getUserFromRequest(req)
    if (!user) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    // Get modules the user has direct access to
    const userModules = await prisma.userModule.findMany({
      where: {
        userId: user.userId,
        OR: [
          { expiresAt: null }, // Never expires
          { expiresAt: { gt: new Date() } }, // Not expired yet
        ],
      },
      include: {
        moduleTier: {
          include: {
            module: true,
            moduleUsage: true,
          },
        },
      },
    })


    return NextResponse.json({
      success: true,
      modules: userModules,
    })
  } catch (error) {
    console.error("Error fetching user modules:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while fetching user modules" },
      { status: 500 },
    )
  }
}
