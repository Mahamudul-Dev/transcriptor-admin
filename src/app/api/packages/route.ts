import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getUserFromRequest } from "@/lib/auth"

// GET /api/packages - Get all packages
export async function GET(req: NextRequest) {
  try {
    // Verify authentication
    const user = getUserFromRequest(req)
    // if (!user) {
    //   return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    // }

    // Get all active packages
    const packages = await prisma.package.findMany({
      where: {
        isActive: true,
      },
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
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    // Get user's packages
    let userPackages: {
      packageId: string;
    }[];
    
    if(user !== null){
      userPackages = await prisma.userPackage.findMany({
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
      });
    }

    let userPackageIds: string[];
    if(userPackages !== undefined){
      userPackageIds = userPackages.map((up) => up.packageId);
    }

    // Format the response
    const formattedPackages = packages.map((pkg) => ({
      id: pkg.id,
      name: pkg.name,
      productId: pkg.productId,
      hasAccess: userPackageIds !== null ? userPackageIds.includes(pkg.id) : false,
      moduleTierCount: pkg.packageTiers.length,
      moduleTiers: pkg.packageTiers.map((pm) => ({
        id: pm.moduleTier.id,
        tier: pm.moduleTier.tier,
        module: pm.moduleTier.module,
        entitlementId: pm.moduleTier.entitlementId,
        productId: pm.moduleTier.productId,
      })),
    }));

    return NextResponse.json({
      success: true,
      packages: formattedPackages,
    })
  } catch (error) {
    console.error("Error fetching packages:", error)
    return NextResponse.json({ success: false, message: "An error occurred while fetching packages" }, { status: 500 })
  }
}
