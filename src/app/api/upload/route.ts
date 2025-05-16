import { type NextRequest, NextResponse } from "next/server"
import { getUserFromRequest } from "@/lib/auth"
import { uploadFile } from "@/lib/utils/file-upload"

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

    // Get the form data
    const formData = await req.formData()
    const file = formData.get("file")
    const isFileValid =
      file && typeof file === "object" && "arrayBuffer" in file;
    const folder = (formData.get("folder") as string) || "uploads"

    if (!isFileValid) {
      return NextResponse.json(
        { success: false, message: "No file provided" },
        { status: 400 }
      );
    }

    // Check file size (limit to 50MB)
    const maxSize = 50 * 1024 * 1024 // 50MB
    if (file.size > maxSize) {
      return NextResponse.json({ success: false, message: "File size exceeds the 50MB limit" }, { status: 400 })
    }

    // Upload the file to local storage
    const fileUrl = await uploadFile(file, folder)

    return NextResponse.json({
      success: true,
      message: "File uploaded successfully",
      url: fileUrl,
    })
  } catch (error) {
    console.error("Error uploading file:", error)
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while uploading the file",
        error: (error as Error).message,
      },
      { status: 500 },
    )
  }
}
