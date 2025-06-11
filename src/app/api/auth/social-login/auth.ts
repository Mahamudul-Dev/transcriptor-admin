// lib/auth/appleAuth.ts
import jwksClient from "jwks-rsa";
import { JwtHeader, SigningKeyCallback } from "jsonwebtoken";
import * as admin from "firebase-admin";

let app: admin.app.App | null = null;



const client = jwksClient({
  jwksUri: "https://appleid.apple.com/auth/keys",
});

export function getAppleSigningKey(
  header: JwtHeader,
  callback: SigningKeyCallback
): void {
  if (!header.kid) {
    return callback(new Error("No KID found in token header"));
  }

  client.getSigningKey(header.kid, (err, key) => {
    if (err) {
      return callback(err);
    }

    // Type-safe way to extract the public key
    const signingKey = key?.getPublicKey?.();
    if (!signingKey) {
      return callback(new Error("Unable to get public key"));
    }

    callback(null, signingKey);
  });
}


export function getFirebaseAdminApp() {
  if (app) return app;

  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  console.log(privateKey);

  if (!admin.apps.length) {
    app = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: privateKey,
      }),
    });
  }

  return app;
}