import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getUserFromRequest } from "@/lib/auth"
import { z } from "zod"

// Schema for assigning a package to a user
const assignPackageSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  packageId: z.string().min(1, "Package ID is required"),
  expiresAt: z.string().datetime().optional(),
})

// POST /api/admin/assign-package - Assign a package to a user (admin only)
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
    const result = assignPackageSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "Invalid input", errors: result.error.errors },
        { status: 400 },
      )
    }

    const { userId, packageId, expiresAt } = result.data

    // Check if the user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    })

    if (!existingUser) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 })
    }

    // Check if the package exists
    const existingPackage = await prisma.package.findUnique({
      where: { id: packageId },
    })

    if (!existingPackage) {
      return NextResponse.json({ success: false, message: "Package not found" }, { status: 404 })
    }

    // Check if the user already has access to the package
    const existingAccess = await prisma.userPackage.findFirst({
      where: {
        userId,
        packageId,
      },
    })

    if (existingAccess) {
      // Update the existing access
      const updatedAccess = await prisma.userPackage.update({
        where: { id: existingAccess.id },
        data: {
          expiresAt: expiresAt ? new Date(expiresAt) : null,
        },
      })

      return NextResponse.json({
        success: true,
        message: "Package access updated successfully",
        userPackage: updatedAccess,
      })
    }

    // Assign the package to the user
    const userPackage = await prisma.userPackage.create({
      data: {
        userId,
        packageId,
        expiresAt: expiresAt ? new Date(expiresAt) : null,
      },
    })

    // Get all modules in the package
    const packageModules = await prisma.packageTier.findMany({
      where: {
        packageId,
      },
      select: {
        id: true,
        packageId: true,
        package: true,
        moduleTierId: true,
        moduleTier: {
          select: {
            id: true,
            entitlementId: true,
            productId: true,
            module: true,
          },
        },
      },
    });

    // For each module in the package, check if the user already has access
    // If not, grant access to the module
    for (const { moduleTierId } of packageModules) {
      const existingModuleAccess = await prisma.userModule.findFirst({
        where: {
          userId,
          moduleTierId,
        },
      })

      if (!existingModuleAccess) {
        await prisma.userModule.create({
          data: {
            userId,
            moduleTierId,
            expiresAt: expiresAt ? new Date(expiresAt) : null,
          },
        })
      }
    }

    return NextResponse.json({
      success: true,
      message: "Package assigned successfully",
      userPackage,
    })
  } catch (error) {
    console.error("Error assigning package:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while assigning the package" },
      { status: 500 },
    )
  }
}
