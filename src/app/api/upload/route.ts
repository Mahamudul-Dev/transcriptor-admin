import { type NextRequest, NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth";
import { uploadFile } from "@/lib/utils/file-upload";
import path from "path";
import fs from "fs/promises";

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

    // Get the form data
    const formData = await req.formData();
    const file = formData.get("file");
    const isFileValid =
      file && typeof file === "object" && "arrayBuffer" in file;
    const folder = (formData.get("folder") as string) || "uploads";

    if (!isFileValid) {
      return NextResponse.json(
        { success: false, message: "No file provided" },
        { status: 400 }
      );
    }

    // Check file size (limit to 50MB)
    const maxSize = 50 * 1024 * 1024; // 50MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { success: false, message: "File size exceeds the 50MB limit" },
        { status: 400 }
      );
    }

    // Upload the file to local storage
    const fileUrl = await uploadFile(file, folder);

    return NextResponse.json({
      success: true,
      message: "File uploaded successfully",
      url: fileUrl,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while uploading the file",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const url = req.nextUrl;
  const moduleId = url.searchParams.get("module");
  const fileName = url.searchParams.get("file");

  if (!moduleId || !fileName) {
    return NextResponse.json(
      {
        success: false,
        message: !moduleId
          ? "Module name is required"
          : "File name is required",
      },
      { status: 400 }
    );
  }

  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "modules",
      moduleId,
      "icon",
      fileName
    );

    // Read the file as binary
    const fileBuffer = await fs.readFile(filePath);

    // Infer the content type from extension (you can use `mime` library too)
    const ext = path.extname(fileName).toLowerCase();
    const contentType = getMimeType(ext);

    return new NextResponse(new Uint8Array(fileBuffer), {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `inline; filename="${fileName}"`,
      },
    });
  } catch (error) {
    console.error("File read error:", error);
    return NextResponse.json(
      { success: false, message: "File not found or cannot be read" },
      { status: 404 }
    );
  }
}

// Simple MIME type mapper
function getMimeType(ext: string): string {
  switch (ext) {
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".gif":
      return "image/gif";
    case ".svg":
      return "image/svg+xml";
    case ".webp":
      return "image/webp";
    default:
      return "application/octet-stream";
  }
}