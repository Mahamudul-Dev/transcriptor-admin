import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {

    const {userId, actionType} = await req.json();

    let usage;

    try {
      // Update usage for the module tier

      if (actionType === "text") {
        usage = await prisma.moduleUsage.updateMany({
          where: {
            userId: userId,
            moduleTierId: params.id,
          },
          data: {
            textProductionCount: { increment: 1 },
          },
        });
      }

      if (actionType === "map") {
        usage = await prisma.moduleUsage.updateMany({
          where: {
            userId: userId,
            moduleTierId: params.id,
          },
          data: {
            mapCount: { increment: 1 },
          },
        });
      }

      if (actionType === "conclusion") {
        usage = await prisma.moduleUsage.updateMany({
          where: {
            userId: userId,
            moduleTierId: params.id,
          },
          data: {
            conclusionCount: { increment: 1 },
          },
        });
      }

      console.log(usage);
      return NextResponse.json({
        success: true,
        message: "Usage updated successfully",
      });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Failed to update usage" }, { status: 500 });
    }
    
}