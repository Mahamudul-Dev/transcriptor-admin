import { z } from "zod"

const moduleTierSchema = z.object({
  tier: z.enum(["basic", "plus", "premium"]),
  productId: z.string().min(1, "RevenueCat productId is required"),
  entitlementId: z.string().min(1, "RevenueCat entitlementId is required"),

  webviewUrl: z.string().url().optional(),
  zipFileUrl: z.string().url().optional(),

  hasTextProduction: z.boolean().optional().default(false),
  hasConclusion: z.boolean().optional().default(false),
  hasMap: z.boolean().optional().default(false),

  textProductionLimit: z.number().int().default(-1),
  conclusionLimit: z.number().int().default(5),
  mapLimit: z.number().int().default(5),
});


// Schema for creating a module
export const createModuleSchema = z.object({
  name: z.string().min(1, "Module name is required"),
  description: z.string().optional(),
  iconUrl: z.string().url().optional(),

  tiers: z.array(moduleTierSchema).min(1, "At least one tier is required"),
});


// Schema for updating a module
export const updateModuleSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().optional(),
  iconUrl: z.string().url().optional(),
  status: z.enum(["active", "hold", "deleted"]).optional(),
  tiers: z.array(moduleTierSchema).optional(),
});

// Schema for module filters
export const moduleFilterSchema = z.object({
  status: z.enum(["active", "hold", "deleted"]).optional(),
  activeSubscriber: z.boolean().optional(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
});


// Schema for file upload
export const fileUploadSchema = z.object({
  file: z.instanceof(Blob, { message: "File is required" }),
  folder: z.string().optional(),
})

export type CreateModuleInput = z.infer<typeof createModuleSchema>
export type UpdateModuleInput = z.infer<typeof updateModuleSchema>
export type ModuleFilterInput = z.infer<typeof moduleFilterSchema>
export type FileUploadInput = z.infer<typeof fileUploadSchema>
