import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getUserFromRequest } from "@/lib/auth"
import { addModulesToPackageSchema } from "@/lib/validations/package"

// GET /api/admin/packages/[id]/modules - Get module tiers in a package (admin only)
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

    // Check if the package exists
    const packageExists = await prisma.package.findUnique({
      where: { id },
    })

    if (!packageExists) {
      return NextResponse.json({ success: false, message: "Package not found" }, { status: 404 })
    }

    // Get modules in the package
    const packageModules = await prisma.packageTier.findMany({
      where: {
        packageId: id,
      },
      include: {
        moduleTier: {
          include: {
            module: true,
          },
        },
      },
    })

    return NextResponse.json({
      success: true,
      modules: packageModules.map((pm) => pm.moduleTier.module)
    });
  } catch (error) {
    console.error("Error fetching package modules:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while fetching package modules" },
      { status: 500 },
    )
  }
}

// POST /api/admin/packages/[id]/modules - Add module tiers to a package (admin only)
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
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
    const result = addModulesToPackageSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "Invalid input", errors: result.error.errors },
        { status: 400 },
      )
    }

    const { moduleTierIds } = result.data

    // Check if the package exists
    const packageExists = await prisma.package.findUnique({
      where: { id },
    })

    if (!packageExists) {
      return NextResponse.json({ success: false, message: "Package not found" }, { status: 404 })
    }

    // Check if all modules exist
    const moduleTiers = await prisma.moduleTier.findMany({
      where: {
        id: {
          in: moduleTierIds,
        },
      },
    });

    if (moduleTiers.length !== moduleTierIds.length) {
      return NextResponse.json(
        { success: false, message: "One or more modules not found" },
        { status: 404 }
      );
    }

    // Get existing package modules
    const existingPackageTiers = await prisma.packageTier.findMany({
      where: {
        packageId: id,
        moduleTierId: {
          in: moduleTierIds,
        },
      },
      select: {
        moduleTierId: true,
      },
    })

    const existingModuleTierIds = existingPackageTiers.map(
      (pm: { moduleTierId: string }) => pm.moduleTierId
    );
    const newModuleIds = moduleTierIds.filter(
      (moduleTierId: string) => !existingModuleTierIds.includes(moduleTierId)
    );

    // Add new modules to the package
    if (newModuleIds.length > 0) {
      await prisma.packageTier.createMany({
        data: newModuleIds.map((moduleTierId) => ({
          packageId: id,
          moduleTierId,
        })),
      })
    }

    // Get updated package modules
    const updatedPackageModules = await prisma.packageTier.findMany({
      where: {
        packageId: id,
      },
      include: {
        moduleTier: {
          include: {
            module: true,
          },
        },
      },
    })

    return NextResponse.json({
      success: true,
      message: `${newModuleIds.length} modules added to the package`,
      modules: updatedPackageModules.map((pm) => pm.moduleTier.module),
    });
  } catch (error) {
    console.error("Error adding modules to package:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while adding modules to the package" },
      { status: 500 },
    )
  }
}
