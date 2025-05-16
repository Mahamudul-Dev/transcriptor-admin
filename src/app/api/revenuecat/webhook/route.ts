import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";


export async function POST(
  req: NextRequest,
) {
  try {
    const event = await req.json();
    const revEvent = event.event;

    console.log({
      "RevenueCat Event": event,
    });

    // Make sure it's a subscription event
    if (!event || !revEvent || !revEvent.subscriber_attributes) {
      console.log({
        "RevenueCat Event": revEvent,
        "RevenueCat Subscriber Attributes": revEvent.subscriber_attributes,
      });
      return NextResponse.json(
        { success: false, message: "Invalid event" },
        { status: 400 }
      );
    }

    const eventType = revEvent.type;
    
    const attributes = revEvent.subscriber_attributes || {};
    const actualUserId = attributes.user_id?.value;

    const expirationDate = revEvent.expiration_at_ms
      ? new Date(revEvent.expiration_at_ms)
      : null;

    const purchaseDate = revEvent.purchased_at_ms
      ? new Date(revEvent.purchased_at_ms)
      : null;

    if (!actualUserId)
      return NextResponse.json({ success: false, message: "Invalid user ID" }, { status: 400 });

    // Find the user by actual backend user ID
    const user = await prisma.user.findUnique({
      where: { id: actualUserId },
    });

    if (!user) return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });

    // Loop through active entitlements
    for (const entitlement of revEvent.entitlement_ids) {
      if (!entitlement) continue;

      const [moduleId, moduleTierId, tier] = entitlement.split("-");

      if (!moduleId || !moduleTierId || !tier) {
        console.warn(`Invalid entitlement format: ${entitlement}`);
        continue;
      }

      if (eventType === "INITIAL_PURCHASE") {
        

        await prisma.userModule.create({
          data: {
            userId: user.id,
            moduleTierId: moduleTierId,
            assignedAt: purchaseDate || new Date(),
            expiresAt: expirationDate,
          },
        });
      }

      if (eventType === "RENEWAL") {
        await prisma.userModule.update({
          where: {
            userId_moduleTierId: {
              userId: user.id,
              moduleTierId: moduleTierId,
            },
          },
          data: {
            assignedAt: purchaseDate || new Date(),
            expiresAt: expirationDate,
          },
        })
      }

      if (eventType === "CANCELLATION") {

        await prisma.userModule.delete({
          where: {
            userId_moduleTierId: {
              userId: user.id,
              moduleTierId: moduleTierId,
            },
          },
        })

      }


      if (eventType === "UNCANCELLATION") {

        const existing = await prisma.userModule.findUnique({
          where: {
            userId_moduleTierId: {
              userId: user.id,
              moduleTierId: moduleTierId,
            },
          },
        });

        if (!existing) {
          await prisma.userModule.create({
            data: {
              userId: user.id,
              moduleTierId: moduleTierId,
              assignedAt: purchaseDate || new Date(),
              expiresAt: expirationDate,
            },
          });
        }
        
      }

      if (eventType === "EXPIRATION") {
        await prisma.userModule.deleteMany({
          where: {
            userId: user.id,
            moduleTierId: moduleTierId,
          },
        });
      }
      
      
    }

    return NextResponse.json({ success: true, message: "Webhook processed" }, { status: 200 });
  } catch (error) {
    console.error("RevenueCat Webhook Error:", error);
    return NextResponse.json({ success: false, message: "Error processing webhook" }, { status: 500 });
  }
}
