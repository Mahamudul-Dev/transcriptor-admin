import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getUserFromRequest } from "@/lib/auth"

// DELETE /api/admin/packages/[id]/modules/[moduleId] - Remove a module tier from a package (admin only)
export async function DELETE(req: NextRequest, { params }: { params: { id: string; moduleTierId: string } }) {
  try {
    // Verify authentication and admin status
    const user = getUserFromRequest(req)
    if (!user) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    if (!user.isAdmin) {
      return NextResponse.json({ success: false, message: "Admin access required" }, { status: 403 })
    }

    const { id, moduleTierId } = params

    // Check if the package exists
    const packageExists = await prisma.package.findUnique({
      where: { id },
    })

    if (!packageExists) {
      return NextResponse.json({ success: false, message: "Package not found" }, { status: 404 })
    }

    // Check if the module exists
    const moduleTierExists = await prisma.moduleTier.findUnique({
      where: { id: moduleTierId },
    });

    if (!moduleTierExists) {
      return NextResponse.json(
        { success: false, message: "Module not found" },
        { status: 404 }
      );
    }

    // Check if the module is in the package
    const packageTier = await prisma.packageTier.findFirst({
      where: {
        packageId: id,
        moduleTierId,
      },
    })

    if (!packageTier) {
      return NextResponse.json(
        { success: false, message: "Module is not in the package" },
        { status: 404 }
      );
    }

    // Remove the module from the package
    await prisma.packageTier.delete({
      where: {
        id: packageTier.id,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Module removed from the package successfully",
    })
  } catch (error) {
    console.error("Error removing module from package:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while removing the module from the package" },
      { status: 500 },
    )
  }
}
