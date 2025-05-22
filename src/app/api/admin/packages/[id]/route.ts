import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getUserFromRequest } from "@/lib/auth"
import { updatePackageSchema } from "@/lib/validations/package"

// GET /api/admin/packages/[id] - Get a specific package (admin only)
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Verify authentication and admin status
    const user = getUserFromRequest(req)
    if (!user) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    if (!user.isAdmin) {
      return NextResponse.json({ success: false, message: "Admin access required" }, { status: 403 })
    }

    const { id } = params

    // Get the package
    const packageData = await prisma.package.findUnique({
      where: { id },
      include: {
        packageTiers: {
          include: {
            moduleTier: {
              include: {
                module: true,
              },
            },
          },
        },
        _count: {
          select: {
            userPackages: true,
          },
        },
      },
    })

    if (!packageData) {
      return NextResponse.json({ success: false, message: "Package not found" }, { status: 404 })
    }

    // Get user statistics
    const userPackages = await prisma.userPackage.findMany({
      where: {
        packageId: id,
      },
      take: 10, // Get top 10 users
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
      },
      orderBy: {
        assignedAt: "desc",
      },
    })

    return NextResponse.json({
      success: true,
      package: packageData,
      userPackages,
    })
  } catch (error) {
    console.error("Error fetching package:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while fetching the package" },
      { status: 500 },
    )
  }
}

// PUT /api/admin/packages/[id] - Update a package (admin only)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Verify authentication and admin status
    const user = getUserFromRequest(req)
    if (!user) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    if (!user.isAdmin) {
      return NextResponse.json({ success: false, message: "Admin access required" }, { status: 403 })
    }

    const { id } = params
    const body = await req.json()

    // Validate input
    const result = updatePackageSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "Invalid input", errors: result.error.errors },
        { status: 400 },
      )
    }

    const { name, productId, isActive } = result.data

    // Check if the package exists
    const existingPackage = await prisma.package.findUnique({
      where: { id },
    })

    if (!existingPackage) {
      return NextResponse.json({ success: false, message: "Package not found" }, { status: 404 })
    }

    // Check if the entitlement name is being changed and if it already exists
    if (productId && productId !== existingPackage.productId) {
      const packageWithSameProductId = await prisma.package.findUnique({
        where: { productId },
      })

      if (packageWithSameProductId) {
        return NextResponse.json(
          {
            success: false,
            message: "A package with this product id already exists",
          },
          { status: 409 }
        );
      }
    }

    // Update the package
    const updateData: any = {}

    if (name !== undefined) {
      updateData.name = name
    }

    if (productId !== undefined) {
      updateData.productId = productId
    }

    if (isActive !== undefined) {
      updateData.isActive = isActive
    }

    const updatedPackage = await prisma.package.update({
      where: { id },
      data: updateData,
    })

    return NextResponse.json({
      success: true,
      message: "Package updated successfully",
      package: updatedPackage,
    })
  } catch (error) {
    console.error("Error updating package:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while updating the package" },
      { status: 500 },
    )
  }
}

// DELETE /api/admin/packages/[id] - Delete a package (admin only)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Verify authentication and admin status
    const user = getUserFromRequest(req)
    if (!user) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    if (!user.isAdmin) {
      return NextResponse.json({ success: false, message: "Admin access required" }, { status: 403 })
    }

    const { id } = params

    // Check if the package exists
    const existingPackage = await prisma.package.findUnique({
      where: { id },
    })

    if (!existingPackage) {
      return NextResponse.json({ success: false, message: "Package not found" }, { status: 404 })
    }

    // Delete the package
    await prisma.package.delete({
      where: { id },
    })

    return NextResponse.json({
      success: true,
      message: "Package deleted successfully",
    })
  } catch (error) {
    console.error("Error deleting package:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while deleting the package" },
      { status: 500 },
    )
  }
}
