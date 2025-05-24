import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {

    const {userId, actionType} = await req.json();

    console.log({
      actionType,
      userId
    });
    if (!userId || !actionType) {
        return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    let usage;

    try {
      // Update usage for the module tier

      if (actionType === "text") {
        usage = await prisma.moduleUsage.upsert({
          where: {
            // Assuming a unique constraint on userId + moduleTierId
            userId_moduleTierId: {
              userId,
              moduleTierId: params.id,
            },
          },
          update: {
            // Update whatever count here
            textProductionCount: { increment: 1 },
          },
          create: {
            userId,
            moduleTierId: params.id,
            textProductionCount: 1,
            mapCount: 0,
            conclusionCount: 0,
          },
        });
        
      }

      if (actionType === "map") {
        usage = await prisma.moduleUsage.upsert({
          where: {
            // Assuming a unique constraint on userId + moduleTierId
            userId_moduleTierId: {
              userId,
              moduleTierId: params.id,
            },
          },
          update: {
            // Update whatever count here
            mapCount: { increment: 1 },
          },
          create: {
            userId,
            moduleTierId: params.id,
            textProductionCount: 1,
            mapCount: 0,
            conclusionCount: 0,
          },
        });
      }

      if (actionType === "conclusion") {
        usage = await prisma.moduleUsage.upsert({
          where: {
            // Assuming a unique constraint on userId + moduleTierId
            userId_moduleTierId: {
              userId,
              moduleTierId: params.id,
            },
          },
          update: {
            // Update whatever count here
            conclusionCount: { increment: 1 },
          },
          create: {
            userId,
            moduleTierId: params.id,
            textProductionCount: 1,
            mapCount: 0,
            conclusionCount: 0,
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