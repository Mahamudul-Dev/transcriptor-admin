import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getUserFromRequest } from "@/lib/auth"

// GET /api/user/modules - Get modules the user has access to
export async function GET(req: NextRequest) {
  try {
    // Verify authentication
    const user = getUserFromRequest(req)
    if (!user) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    console.log(user);

    // Get modules the user has direct access to
    const userModules = await prisma.userModule.findMany({
      where: {
        userId: user.userId,
        OR: [
          { expiresAt: null }, // Never expires
          { expiresAt: { gt: new Date() } }, // Not expired yet
        ],
      },
      include: {
        moduleTier: {
          include: {
            module: true,
            moduleUsage: true,
          },
        },
      },
    })


    return NextResponse.json({
      success: true,
      modules: userModules,
    })
  } catch (error) {
    console.error("Error fetching user modules:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while fetching user modules" },
      { status: 500 },
    )
  }
}


export async function POST(req: NextRequest) {
  try {
    // Verify authentication
    const user = getUserFromRequest(req)
    if (!user) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    // parse entitelments from the request body
    const { entitelments } = await req.json()

    if(!entitelments) {
      return NextResponse.json({ success: false, message: "No entitelments provided" }, { status: 400 })
    }

    // get module tiers from the productIds
    const moduleTiers = await prisma.moduleTier.findMany({
      where: {
        entitlementId: {
          in: entitelments
        },
        
      },
      include: {
        module: true,
      },
    });

    return NextResponse.json({
      success: true,
      moduleTiers,
    });
    
  } catch (error) {
    console.error("Error fetching user modules:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while fetching user modules" },
      { status: 500 },
    )
  }
}