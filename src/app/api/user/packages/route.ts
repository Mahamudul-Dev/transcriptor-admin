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
            packageTiers: {
              include: {
                moduleTier: {
                  include: {
                    module: true,
                  }
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
      productId: up.package.productId,
      assignedAt: up.assignedAt,
      expiresAt: up.expiresAt,
      moduleTiersCount: up.package.packageTiers.length,
      moduleTiers: up.package.packageTiers.map((pm) => ({
        id: pm.moduleTierId,
        tier: pm.moduleTier.tier,
        productId: pm.moduleTier.productId,
        entitlementId: pm.moduleTier.entitlementId
      })),
    }));

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


export async function POST(req: NextRequest) {
  try {
    const user = getUserFromRequest(req)
    if (!user) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    // parse productIds from the request body
    const { productIds } = await req.json()

    if(!productIds) {
      return NextResponse.json({ success: false, message: "No productIds provided" }, { status: 400 })
    }

    const packages = await prisma.package.findMany({
      where: {
        productId: {
          in: productIds
        }
      },
      include: {
        packageTiers: {
          include: {
            moduleTier: {
              include: {
                module: true,
              }
            },
          },
        },
      },
    });


    

    return NextResponse.json({
      success: true,
      packages,
    });
  } catch (error) {
    
  }
}