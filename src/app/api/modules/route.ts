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

    let modulesWithTiers: any[] = []

    modulesWithTiers = await prisma.module.findMany({
      include: {
        tiers: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });


    if(status){
      modulesWithTiers = modulesWithTiers.filter(
        (module) => module.status === status
      );
    }

    return NextResponse.json(
      { success: true, modules: modulesWithTiers },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error fetching modules:", error)
    return NextResponse.json({ success: false, message: "An error occurred while fetching modules" }, { status: 500 })
  }
}
