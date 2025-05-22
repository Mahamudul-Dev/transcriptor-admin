import { type NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

// GET /api/user/modules - Get module usage the user has access to
export async function GET(req: NextRequest) {
  try {
    // Verify authentication
    const user = getUserFromRequest(req);
    const url = req.nextUrl;
    const generate = url.searchParams.get("generate");
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Authentication required" },
        { status: 401 }
      );
    }
    console.log(user);

    if(generate === 'true') {
        const modules = await prisma.module.findMany({
            select: {
                id: true,
                tiers: true
            },
        });
        await prisma.userModule.createMany({
          data: modules.flatMap((module) =>
            module.tiers.map((tier) => ({
              userId: user.userId,
              moduleTierId: tier.id,
            }))
          ),
          skipDuplicates: true,
        });

        const userModuels = await prisma.userModule.findMany({
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

        await prisma.moduleUsage.createMany({
            data: [
                ...userModuels.flatMap((userModule) => userModule.moduleTier.moduleUsage.map((usage) => ({
                    userId: user.userId,
                    moduleTierId: userModule.moduleTierId,
                    ...usage,
                })))
            ]
        });
    }

    const usage = await prisma.moduleUsage.findMany({
      where: {
        userId: user.userId,
      },
      include: {
        moduleTier: {
          include: {
            module: true,
          },
        },
      }
    });

    return NextResponse.json({ success: true, usage });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
