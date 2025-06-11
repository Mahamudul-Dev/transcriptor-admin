import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { getUserFromRequest } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { checkUsageInfo } from "@/lib/utils/usage-limit";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const module = searchParams.get("module");
  const tier = searchParams.get("tier");
  // const tierId = searchParams.get("tierId");

  if (!tier) {
    return NextResponse.json(
      { error: "Tier param is required" },
      { status: 400 }
    );
  }

  if (!module) {
    return NextResponse.json(
      { error: "Module param is required" },
      { status: 400 }
    );
  }

  if (!tier) {
    return NextResponse.json(
      { error: "Tier param is required" },
      { status: 400 }
    );
  }

  // check if user has access to the module
  // const user = getUserFromRequest(req);
  // if (!user) {
  //   return NextResponse.json(
  //     { success: false, message: "Authentication required" },
  //     { status: 401 }
  //   );
  // }

  const indexPath = path.join(
    process.cwd(),
    "public",
    "modules",
    module,
    tier,
    "index.html"
  );

  try {
    const fileContent = await fs.readFile(indexPath, "utf-8");
    return new NextResponse(fileContent, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Module not found or missing index.html" },
      { status: 404 }
    );
  }
}
