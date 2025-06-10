import { type NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";
import { createModuleSchema } from "@/lib/validations/module";
import { uploadModuleIcon, uploadModuleZip } from "@/lib/utils/file-upload";
import { moduleUsageTrackerInjection } from "@/lib/utils/usage-limit";
import { text } from "stream/consumers";

// GET /api/admin/modules - Get all modules (admin only)
export async function GET(req: NextRequest) {
  try {
    // Verify authentication and admin status
    const user = getUserFromRequest(req);
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Authentication required" },
        { status: 401 }
      );
    }

    if (!user.isAdmin) {
      return NextResponse.json(
        { success: false, message: "Admin access required" },
        { status: 403 }
      );
    }

    // Parse query parameters
    const url = new URL(req.url);
    const status = url.searchParams.get("status") || undefined;

    // Build the query
    const query: any = {};

    if (status) {
      query.status = status;
    }

    // Get all modules
    const modules = await prisma.module.findMany({
      where: query,
      include: {
        tiers: {
          include: {
            _count: {
              select: {
                moduleUsage: true,
                users: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      modules,
    });
  } catch (error) {
    console.error("Error fetching modules:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred while fetching modules" },
      { status: 500 }
    );
  }
}

// POST /api/admin/modules - Create a new module (admin only)
export async function POST(req: NextRequest) {
  try {
    // Verify authentication and admin status
    const user = getUserFromRequest(req);
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Authentication required" },
        { status: 401 }
      );
    }

    if (!user.isAdmin) {
      return NextResponse.json(
        { success: false, message: "Admin access required" },
        { status: 403 }
      );
    }

    // Check if the request is multipart/form-data
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      // Handle multipart form data
      const formData = await req.formData();

      // Extract module data
      const name = formData.get("name") as string;
      const description = (formData.get("description") as string) || "";
      const iconFile = formData.get("iconFile");
      const isIconFileValid =
        iconFile && typeof iconFile === "object" && "arrayBuffer" in iconFile;
      let iconUrl = null;

      console.log("Creating module with name:", name);

      const moduleExists = await prisma.module.findUnique({
        where: { name },
      });

      if (moduleExists) {
        return NextResponse.json({
          success: false,
          message: "Module with the same name already exists",
        });
      }

      // Create the module first to get an ID
      const modulePack = await prisma.module.create({
        data: {
          name,
          description,
        },
      });

      if (isIconFileValid) {
        try {
          // Use direct function call instead of fetch
          const icon = await uploadModuleIcon(iconFile, modulePack.id);
          iconUrl = `${process.env.API_BASE_URL}/api/upload?module=${modulePack.id}&file=${icon}`;
          await prisma.module.update({
            where: {
              id: modulePack.id,
            },
            data: {
              iconUrl,
            },
          });
        } catch (uploadError) {
          console.error(
            `Error uploading icon file for ${name} module:`,
            uploadError
          );
        }
      }

      console.log("Module created successfully:", modulePack.id);

      // Process tiers
      const tiers = ["basic", "plus", "premium"];
      const createdTiers = [];
      const formattedName = modulePack.name.toLowerCase().replace(/\s+/g, "_");

      for (const tier of tiers) {
        // Get tier-specific data

        const hasTextProduction =
          formData.get(`${tier}_hasTextProduction`) === "true";

        const hasConclusion = formData.get(`${tier}_hasConclusion`) === "true";
        const hasMap = formData.get(`${tier}_hasMap`) === "true";

        const textLimit = formData.get(`${tier}_textLimit`)
          ? Number.parseInt(formData.get(`${tier}_textLimit`) as string)
          : 50;

        const textProductionId = formData.get(
          `${tier}_textProductionId`
        ) as string;

        const mapLimit = formData.get(`${tier}_mapLimit`)
          ? Number.parseInt(formData.get(`${tier}_mapLimit`) as string)
          : 0;

        const mapProductionId = formData.get(
          `${tier}_mapProductionId`
        ) as string;

        const conclutionLimit = formData.get(`${tier}_conclutionLimit`)
          ? Number.parseInt(formData.get(`${tier}_conclutionLimit`) as string)
          : 0;

        const conclutionProductionId = formData.get(
          `${tier}_conclutionProductionId`
        ) as string;

        console.log(`Processing tier ${tier} for modulePack ${modulePack.id}`);

        // Get files (compatible with Node.js environment)
        const zipFile = formData.get(`${tier}_zipFile`);

        // Optional: check if they are actually file-like objects
        const isZipFileValid =
          zipFile && typeof zipFile === "object" && "arrayBuffer" in zipFile;

        // Upload files if provided
        let folderPath = null;
        let moduleUploadDir = null;

        console.log({
          zipFile,
          iconFile,
        });

        if (isZipFileValid) {
          try {
            // Use direct function call instead of fetch
            folderPath = `modules/${modulePack.id}/${tier}`;
            moduleUploadDir = await uploadModuleZip(
              zipFile,
              modulePack.id,
              tier
            );
            console.log(`Uploaded ZIP file for ${tier} tier:`, moduleUploadDir);
          } catch (uploadError) {
            console.error(
              `Error uploading ZIP file for ${tier} tier:`,
              uploadError
            );
          }
        }

        console.log(`Creating tier ${tier} for module ${modulePack.id}`);

        const productId = `module_${formattedName}_${tier}`;
        const entitlementId = `entitlement_${formattedName}_${tier}`;

        if (isZipFileValid) {
          const createdTier = await prisma.moduleTier.create({
            data: {
              moduleId: modulePack.id,
              tier,
              productId: productId,
              entitlementId: entitlementId,
              webviewUrl: `${process.env.WEBVIEW_URL}?module=${modulePack.id}&tier=${tier}`,
              zipFileUrl: folderPath,
              hasTextProduction,
              hasConclusion,
              hasMap,
              textProductionLimit: textLimit,
              mapLimit: mapLimit,
              conclusionLimit: conclutionLimit,
              textProductionId: textProductionId,
              mapId: mapProductionId,
              conclusionId: conclutionProductionId,
            },
          });

          console.log(`Created tier ${tier} for module ${modulePack.id}`);

          // script injection
          moduleUsageTrackerInjection(
            moduleUploadDir!,
            textProductionId,
            mapProductionId,
            conclutionProductionId,
            createdTier.id,
            process.env.API_BASE_URL || "http://localhost:3000"
          );

          console.log(`Tier ${tier} created successfully:`, createdTier.id);
          createdTiers.push(createdTier);
        }
      }

      // Create the tier

      // Get the complete module with tiers
      const completeModule = await prisma.module.findUnique({
        where: { id: modulePack.id },
        include: {
          tiers: true,
        },
      });

      return NextResponse.json({
        success: true,
        message: "Module created successfully",
        module: completeModule,
      });
    } else {
      // Handle JSON request
      const body = await req.json();

      // Validate input
      const result = createModuleSchema.safeParse(body);
      if (!result.success) {
        return NextResponse.json(
          {
            success: false,
            message: "Invalid input",
            errors: result.error.errors,
          },
          { status: 400 }
        );
      }

      const { name, description, tiers } = result.data;
      const formattedName = name.toLowerCase().replace(/\s+/g, "_");

      // Create the module
      const modulePack = await prisma.module.create({
        data: {
          name,
          description,
          tiers: {
            create: tiers.map((tier) => {
              // Generate the entitlementName based on module name and tier
              const productId = `module_${formattedName}_${tier}`;
              const entitlementId = `entitlement_${formattedName}_${tier}`;
              return {
                moduleId: modulePack.id,
                tier: tier.tier,
                entitlementId,
                webviewUrl: tier.webviewUrl,
                zipFileUrl: tier.zipFileUrl,
                productId,
                hasTextProduction: tier.hasTextProduction,
                hasConclusion: tier.hasConclusion,
                hasMap: tier.hasMap,
                textProductionLimit: tier.textProductionLimit,
                mapLimit: tier.mapLimit,
                conclusionLimit: tier.conclusionLimit,
              };
            }),
          },
        },
        include: {
          tiers: true,
        },
      });

      return NextResponse.json({
        success: true,
        message: "Module created successfully",
        modulePack,
      });
    }
  } catch (error) {
    console.error("Error creating module:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while creating the module",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
