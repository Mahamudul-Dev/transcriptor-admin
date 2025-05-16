import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getUserFromRequest } from "@/lib/auth"

// GET /api/packages - Get all packages
export async function GET(req: NextRequest) {
  try {
    // Verify authentication
    const user = getUserFromRequest(req)
    if (!user) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    // Get all active packages
    const packages = await prisma.package.findMany({
      where: {
        isActive: true,
      },
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
      orderBy: {
        createdAt: "desc",
      },
    })

    // Get user's packages
    const userPackages = await prisma.userPackage.findMany({
      where: {
        userId: user.userId,
        OR: [
          { expiresAt: null }, // Never expires
          { expiresAt: { gt: new Date() } }, // Not expired yet
        ],
      },
      select: {
        packageId: true,
      },
    })

    const userPackageIds = userPackages.map((up) => up.packageId)

    // Format the response
    const formattedPackages = packages.map((pkg) => ({
      id: pkg.id,
      name: pkg.name,
      entitlementName: pkg.entitlementName,
      hasAccess: userPackageIds.includes(pkg.id),
      moduleCount: pkg.packageModules.length,
      modules: pkg.packageModules.map((pm) => ({
        id: pm.module.id,
        name: pm.module.name,
      })),
    }))

    return NextResponse.json({
      success: true,
      packages: formattedPackages,
    })
  } catch (error) {
    console.error("Error fetching packages:", error)
    return NextResponse.json({ success: false, message: "An error occurred while fetching packages" }, { status: 500 })
  }
}
