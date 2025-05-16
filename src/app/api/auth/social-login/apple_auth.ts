// lib/auth/appleAuth.ts
import jwksClient from "jwks-rsa";
import { JwtHeader, SigningKeyCallback } from "jsonwebtoken";

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
