import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getUserFromRequest } from "@/lib/auth"

// GET /api/user/packages - Get packages the user has access to
export async function GET(req: NextRequest) {
  try {
    // Verify authentication
    const user = getUserFromRequest(req)
    if (!user) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    // Get packages the user has direct access to
    const userPackages = await prisma.userPackage.findMany({
      where: {
        userId: user.userId,
        OR: [
          { expiresAt: null }, // Never expires
          { expiresAt: { gt: new Date() } }, // Not expired yet
        ],
      },
      include: {
        package: {
          include: {
            packageModules: {
              include: {
                module: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    })

    // Format the response
    const formattedPackages = userPackages.map((up) => ({
      id: up.package.id,
      name: up.package.name,
      entitlementName: up.package.entitlementName,
      assignedAt: up.assignedAt,
      expiresAt: up.expiresAt,
      moduleCount: up.package.packageModules.length,
      modules: up.package.packageModules.map((pm) => ({
        id: pm.module.id,
        name: pm.module.name,
      })),
    }))

    return NextResponse.json({
      success: true,
      packages: formattedPackages,
    })
  } catch (error) {
    console.error("Error fetching user packages:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while fetching user packages" },
      { status: 500 },
    )
  }
}
