import { z } from "zod"

// Schema for module tier
const moduleTierSchema = z.object({
  tier: z.enum(["basic", "plus", "premium"]),
  entitlementName: z.string().optional(), // Now optional as it will be auto-generated
  revCatEntitlementName: z.string().min(1, "RevenueCat entitlement name is required"),
  webviewUrl: z.string().optional(),
  zipFileUrl: z.string().optional(),
  iconUrl: z.string().optional(),
  hasTextProduction: z.boolean().default(false),
  hasConclusion: z.boolean().default(false),
  hasMap: z.boolean().default(false),
  price: z.number().optional(),
  usageLimit: z.number().default(50), // -1 for unlimited
})

// Schema for creating a module
export const createModuleSchema = z.object({
  name: z.string().min(1, "Module name is required"),
  description: z.string().optional(),
  tiers: z.array(moduleTierSchema).min(1, "At least one tier is required"),
})

// Schema for updating a module
export const updateModuleSchema = z.object({
  name: z.string().min(1, "Module name is required").optional(),
  description: z.string().optional(),
  status: z.enum(["active", "hold", "deleted"]).optional(),
  tiers: z.array(moduleTierSchema).optional(),
})

// Schema for module filters
export const moduleFilterSchema = z.object({
  status: z.enum(["active", "hold", "deleted"]).optional(),
  activeSubscriber: z.boolean().optional(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
})

// Schema for file upload
export const fileUploadSchema = z.object({
  file: z.instanceof(Blob, { message: "File is required" }),
  folder: z.string().optional(),
})

export type CreateModuleInput = z.infer<typeof createModuleSchema>
export type UpdateModuleInput = z.infer<typeof updateModuleSchema>
export type ModuleFilterInput = z.infer<typeof moduleFilterSchema>
export type FileUploadInput = z.infer<typeof fileUploadSchema>
