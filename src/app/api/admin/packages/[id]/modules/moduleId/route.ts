import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getUserFromRequest } from "@/lib/auth"

// DELETE /api/admin/packages/[id]/modules/[moduleId] - Remove a module from a package (admin only)
export async function DELETE(req: NextRequest, { params }: { params: { id: string; moduleId: string } }) {
  try {
    // Verify authentication and admin status
    const user = getUserFromRequest(req)
    if (!user) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    if (!user.isAdmin) {
      return NextResponse.json({ success: false, message: "Admin access required" }, { status: 403 })
    }

    const { id, moduleId } = params

    // Check if the package exists
    const packageExists = await prisma.package.findUnique({
      where: { id },
    })

    if (!packageExists) {
      return NextResponse.json({ success: false, message: "Package not found" }, { status: 404 })
    }

    // Check if the module exists
    const moduleExists = await prisma.module.findUnique({
      where: { id: moduleId },
    })

    if (!moduleExists) {
      return NextResponse.json({ success: false, message: "Module not found" }, { status: 404 })
    }

    // Check if the module is in the package
    const packageModule = await prisma.packageModule.findFirst({
      where: {
        packageId: id,
        moduleId,
      },
    })

    if (!packageModule) {
      return NextResponse.json({ success: false, message: "Module is not in the package" }, { status: 404 })
    }

    // Remove the module from the package
    await prisma.packageModule.delete({
      where: {
        id: packageModule.id,
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
