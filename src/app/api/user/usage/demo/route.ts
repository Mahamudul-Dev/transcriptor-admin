import { getUserFromRequest } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user = getUserFromRequest(req);
  if (!user) {
    return NextResponse.json(
      { success: false, message: "Authentication required" },
      { status: 401 }
    );
  }

  const modules = await prisma.module.findMany(
    {
      select: {
        id: true,
        tiers: true
      },
    }
  );

  modules.forEach(async (module) => {
    module.tiers.forEach(async (tier) => {
      await prisma.moduleUsage.create({
        data: {
          userId: user.userId,
          moduleTierId: tier.id,
        },
      });
    });
  });

  

  const usage = await prisma.moduleUsage.findMany({
    where: {
      userId: user.userId,
    },
    include : {
      moduleTier : {
        include : {
          module : true
        }
      }
    }
  });

  return NextResponse.json({ success: true, usage });
}
