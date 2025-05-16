import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

export const signupSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  profession: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  deviceId: z.string().optional(),
})

export const syncRevenueCatSchema = z.object({
  userId: z.string(),
  entitlements: z.array(z.string()),
})

export type LoginInput = z.infer<typeof loginSchema>
export type SignupInput = z.infer<typeof signupSchema>
export type SyncRevenueCatInput = z.infer<typeof syncRevenueCatSchema>
