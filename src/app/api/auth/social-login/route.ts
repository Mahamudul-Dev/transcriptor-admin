import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuth } from "firebase-admin/auth";
import jwt from "jsonwebtoken"; 
import { v4 as uuidv4 } from "uuid";
import { generateAccessToken, generateRefreshToken } from "@/lib/jwt";
import { getAppleSigningKey, getFirebaseAdminApp } from "./auth";
import { string } from "zod";

  


export async function POST(req: NextRequest) {
  try {
    const app = getFirebaseAdminApp();
    const { idToken, provider } = await req.json();

    if (!idToken || !["google", "apple"].includes(provider)) {
      return NextResponse.json(
        { success: false, message: "Invalid request" },
        { status: 400 }
      );
    }

    let email = "";
    let sub = "";
    let fullName = "";

    // ✅ GOOGLE Verification
    if (provider === "google") {
      const decodedToken = await getAuth(app).verifyIdToken(idToken); // Verifying Google ID token with Firebase
      email = decodedToken.email || "";
      sub = decodedToken.uid;
      fullName = decodedToken.name || "Google User";

      if (!email) {
        return NextResponse.json(
          { success: false, message: "Email not verified" },
          { status: 401 }
        );
      }
    }

    // ✅ APPLE Verification
    if (provider === "apple") {
      // Decode and verify Apple ID token
      const decodedPayload: any = jwt.verify(idToken, getAppleSigningKey, {
        algorithms: ["RS256"],
        issuer: "https://appleid.apple.com",
      });

      email = decodedPayload.email || "";
      sub = decodedPayload.sub;
      fullName = decodedPayload.name || "Apple User";
    }

    // 🔍 Find or create user
    let user = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
        ],
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          password: "",
          fullName,
          isAdmin: false,
        },
      });
    } else {
      // Optional: Update login timestamp
      await prisma.user.update({
        where: { id: user.id },
        data: { lastLoginAt: new Date() },
      });
    }

    const tokenPayload = {
      userId: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    };

    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);


    return NextResponse.json({
      success: true,
      message: "Login successful",
      user: user,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error("Social login error:", error);
    return NextResponse.json(
      { success: false, message: "Login failed" },
      { status: 500 }
    );
  }
}
