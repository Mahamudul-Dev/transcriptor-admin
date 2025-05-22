import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getUserFromRequest } from "@/lib/auth"
import { createPackageSchema } from "@/lib/validations/package"

// GET /api/admin/packages - Get all packages (admin only)
export async function GET(req: NextRequest) {
  try {
    // Verify authentication and admin status
    const user = getUserFromRequest(req)
    if (!user) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    if (!user.isAdmin) {
      return NextResponse.json({ success: false, message: "Admin access required" }, { status: 403 })
    }

    // Parse query parameters
    const url = new URL(req.url)
    const isActive = url.searchParams.get("isActive")

    // Build the query
    const query: any = {}

    if (isActive !== null) {
      query.isActive = isActive === "true"
    }

    // Get all packages
    const packages = await prisma.package.findMany({
      where: query,
      include: {
        _count: {
          select: {
            packageTiers: true,
            userPackages: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json({
      success: true,
      packages,
    })
  } catch (error) {
    console.error("Error fetching packages:", error)
    return NextResponse.json({ success: false, message: "An error occurred while fetching packages" }, { status: 500 })
  }
}

// POST /api/admin/packages - Create a new package (admin only)
export async function POST(req: NextRequest) {
  try {
    // Verify authentication and admin status
    const user = getUserFromRequest(req)
    if (!user) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    if (!user.isAdmin) {
      return NextResponse.json({ success: false, message: "Admin access required" }, { status: 403 })
    }

    const body = await req.json()

    // Validate input
    const result = createPackageSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "Invalid input", errors: result.error.errors },
        { status: 400 },
      )
    }

    const { name, description, isActive } = result.data

    // Check if a package with the same entitlement name already exists
    const existingPackage = await prisma.package.findUnique({
      where: { name },
    })

    if (existingPackage) {
      return NextResponse.json(
        { success: false, message: "A package with this entitlement name already exists" },
        { status: 409 },
      )
    }

    const formattedName = name.toLowerCase().replace(/\s+/g, "_");
    const productId = `pkg_${formattedName}`;

    // Create the package
    const newPackage = await prisma.package.create({
      data: {
        name,
        description,
        productId,
        isActive,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Package created successfully",
      package: newPackage,
    })
  } catch (error) {
    console.error("Error creating package:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while creating the package" },
      { status: 500 },
    )
  }
}
