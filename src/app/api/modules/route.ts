import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getUserFromRequest } from "@/lib/auth"
import { moduleFilterSchema } from "@/lib/validations/module"

// GET /api/modules - Get all modules (with optional filtering)
export async function GET(req: NextRequest) {
  try {
    // Verify authentication
    const user = getUserFromRequest(req)
    if (!user) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    // Parse query parameters
    const url = new URL(req.url)
    const status = url.searchParams.get("status") || undefined
    const activeSubscriber = url.searchParams.get("activeSubscriber") === "true"
    const minPrice = url.searchParams.get("minPrice") ? Number(url.searchParams.get("minPrice")) : undefined
    const maxPrice = url.searchParams.get("maxPrice") ? Number(url.searchParams.get("maxPrice")) : undefined

    // Validate filters
    const filterResult = moduleFilterSchema.safeParse({
      status,
      activeSubscriber,
      minPrice,
      maxPrice,
    })

    if (!filterResult.success) {
      return NextResponse.json(
        { success: false, message: "Invalid filter parameters", errors: filterResult.error.errors },
        { status: 400 },
      )
    }

    // Build the query
    const query: any = {}

    if (status) {
      query.status = status
    }

    // Get all modules
    const modules = await prisma.module.findMany({
      where: query,
      include: {
        tiers: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    // Filter by price if needed
    let filteredModules = modules
    // if (minPrice !== undefined || maxPrice !== undefined) {
    //   filteredModules = modules.filter((module) => {
    //     // Check if any tier's price is within the range
    //     return module.tiers.some((tier) => {
    //       const price = tier.price ? Number(tier.price) : 0
    //       if (minPrice !== undefined && maxPrice !== undefined) {
    //         return price >= minPrice && price <= maxPrice
    //       } else if (minPrice !== undefined) {
    //         return price >= minPrice
    //       } else if (maxPrice !== undefined) {
    //         return price <= maxPrice
    //       }
    //       return true
    //     })
    //   })
    // }

    // If activeSubscriber filter is applied, check if the user has access to the modules
    if (activeSubscriber) {
      // Get all modules the user has access to
      const userModules = await prisma.userModule.findMany({
        where: {
          userId: user.userId,
          // Only include active subscriptions
          OR: [
            { expiresAt: null }, // Never expires
            { expiresAt: { gt: new Date() } }, // Not expired yet
          ],
        },
        select: {
          moduleTier: {
            include: {
              module: true,
            },
          },
        },
      })

      // Extract all module IDs from user modules
      const accessibleModuleIds = userModules.map((um) => um.moduleTier.id)

      // Filter modules to only include those the user has access to
      filteredModules = filteredModules.filter((module) => module.tiers.map((tier) => tier.id).some((id) => accessibleModuleIds.includes(id)))
    }

    // Add a flag to indicate if the user has access to each module
    const modulesWithAccessInfo = await Promise.all(
      filteredModules.map(async (module) => {
        // Check if the user has direct access to the module
        const directAccess = await prisma.userModule.findFirst({
          where: {
            userId: user.userId,
            moduleTierId: module.id,
            OR: [
              { expiresAt: null }, // Never expires
              { expiresAt: { gt: new Date() } }, // Not expired yet
            ],
          },
        })

        // Get usage information
        const moduleUsage = await prisma.moduleUsage.findFirst({
          where: {
            userId: user.userId,
            moduleId: module.id,
          },
        })

        return {
          ...module,
          hasAccess: !!directAccess,
          usage: moduleUsage || {},
        }
      }),
    )

    return NextResponse.json({
      success: true,
      modules: modulesWithAccessInfo,
    })
  } catch (error) {
    console.error("Error fetching modules:", error)
    return NextResponse.json({ success: false, message: "An error occurred while fetching modules" }, { status: 500 })
  }
}
