import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getUserFromRequest } from "@/lib/auth"
import { addModulesToPackageSchema } from "@/lib/validations/package"

// GET /api/admin/packages/[id]/modules - Get modules in a package (admin only)
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
    const packageModules = await prisma.packageModule.findMany({
      where: {
        packageId: id,
      },
      include: {
        module: {
          include: {
            tiers: true,
          },
        },
      },
    })

    return NextResponse.json({
      success: true,
      modules: packageModules.map(
        (
          pm: {
            module: {
              tiers: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                moduleId: string;
                tier: string;
                entitlementName: string;
                webviewUrl: string | null;
                zipFileUrl: string | null;
                hasTextProduction: boolean;
                hasConclusion: boolean;
                hasMap: boolean;
                textProductionLimit: number;
                conclusionLimit: number;
                mapLimit: number;
              }[];
            } & {
              status: string;
              name: string;
              id: string;
              createdAt: Date;
              updatedAt: Date;
              description: string | null;
            };
          } & {
            id: string;
            createdAt: Date;
            packageId: string;
            moduleId: string;
          }
        ) => pm.module
      ),
    });
  } catch (error) {
    console.error("Error fetching package modules:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while fetching package modules" },
      { status: 500 },
    )
  }
}

// POST /api/admin/packages/[id]/modules - Add modules to a package (admin only)
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

    const { moduleIds } = result.data

    // Check if the package exists
    const packageExists = await prisma.package.findUnique({
      where: { id },
    })

    if (!packageExists) {
      return NextResponse.json({ success: false, message: "Package not found" }, { status: 404 })
    }

    // Check if all modules exist
    const modules = await prisma.module.findMany({
      where: {
        id: {
          in: moduleIds,
        },
      },
    })

    if (modules.length !== moduleIds.length) {
      return NextResponse.json({ success: false, message: "One or more modules not found" }, { status: 404 })
    }

    // Get existing package modules
    const existingPackageModules = await prisma.packageModule.findMany({
      where: {
        packageId: id,
        moduleId: {
          in: moduleIds,
        },
      },
      select: {
        moduleId: true,
      },
    })

    const existingModuleIds = existingPackageModules.map(
      (pm: { moduleId: string }) => pm.moduleId
    );
    const newModuleIds = moduleIds.filter((moduleId: string) => !existingModuleIds.includes(moduleId))

    // Add new modules to the package
    if (newModuleIds.length > 0) {
      await prisma.packageModule.createMany({
        data: newModuleIds.map((moduleId) => ({
          packageId: id,
          moduleId,
        })),
      })
    }

    // Get updated package modules
    const updatedPackageModules = await prisma.packageModule.findMany({
      where: {
        packageId: id,
      },
      include: {
        module: {
          include: {
            tiers: true,
          },
        },
      },
    })

    return NextResponse.json({
      success: true,
      message: `${newModuleIds.length} modules added to the package`,
      modules: updatedPackageModules.map(
        (
          pm: {
            module: {
              tiers: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                moduleId: string;
                tier: string;
                entitlementName: string;
                webviewUrl: string | null;
                zipFileUrl: string | null;
                hasTextProduction: boolean;
                hasConclusion: boolean;
                hasMap: boolean;
                textProductionLimit: number;
                conclusionLimit: number;
                mapLimit: number;
              }[];
            } & {
              id: string;
              status: string;
              name: string;
              createdAt: Date;
              updatedAt: Date;
              description: string | null;
            };
          } & {
            id: string;
            createdAt: Date;
            packageId: string;
            moduleId: string;
          }
        ) => pm.module
      ),
    });
  } catch (error) {
    console.error("Error adding modules to package:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while adding modules to the package" },
      { status: 500 },
    )
  }
}
