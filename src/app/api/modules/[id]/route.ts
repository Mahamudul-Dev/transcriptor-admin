import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getUserFromRequest } from "@/lib/auth"
import { checkUsageInfo } from "@/lib/utils/usage-limit"

// GET /api/modules/[id] - Get a specific module
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Verify authentication
    const user = getUserFromRequest(req)
    if (!user) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    const { id } = params

    // Get the module
    const moduleTier = await prisma.moduleTier.findUnique({
      where: { id },
      include: {
        module: true,
      },
    })

    if (!moduleTier) {
      return NextResponse.json(
        { success: false, message: "Module not found" },
        { status: 404 }
      );
    }

    // Check if the user has access to the module
    const userModule = await prisma.userModule.findFirst({
      where: {
        userId: user.userId,
        moduleTierId: id,
        OR: [
          { expiresAt: null }, // Never expires
          { expiresAt: { gt: new Date() } }, // Not expired yet
        ],
      },
    })

    const hasAccess = !!userModule

    // If the user has access, get usage information
    let usageInfo = null
    if (hasAccess) {
      try {
        usageInfo = await checkUsageInfo(user.userId, id)
      } catch (error) {
        console.error("Error checking usage limit:", error)
      }
    }

    return NextResponse.json({
      success: true,
      moduleTier: {
        ...moduleTier,
        hasAccess,
        usageInfo,
      },
    })
  } catch (error) {
    console.error("Error fetching module:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while fetching the module" },
      { status: 500 },
    )
  }
}
