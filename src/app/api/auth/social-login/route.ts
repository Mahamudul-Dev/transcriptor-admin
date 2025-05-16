import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuth } from "firebase-admin/auth";
import jwt from "jsonwebtoken"; 
import { v4 as uuidv4 } from "uuid";
import * as admin from "firebase-admin";
import { generateAccessToken, generateRefreshToken } from "@/lib/jwt";
import { getAppleSigningKey } from "./apple_auth";
import path from "path";


if (!admin.apps.length) {
  // Initialize Firebase Admin SDK with service account credentials (ensure you set your env variables)
  admin.initializeApp({
    credential: admin.credential.cert(
      path.join(process.cwd(), "service-account.json")
    ),
  });
}
  


export async function POST(req: NextRequest) {
  try {
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
      const decodedToken = await getAuth().verifyIdToken(idToken); // Verifying Google ID token with Firebase
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
      fullName = "Apple User";
    }

    // 🔍 Find or create user
    let user = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { googleId: provider === "google" ? sub : undefined },
          { appleId: provider === "apple" ? sub : undefined },
        ],
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          password: "",
          fullName,
          googleId: provider === "google" ? sub : undefined,
          appleId: provider === "apple" ? sub : undefined,
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
