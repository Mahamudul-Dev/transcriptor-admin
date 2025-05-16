import { z } from "zod"

// Schema for creating a package
export const createPackageSchema = z.object({
  name: z.string().min(1, "Package name is required"),
  entitlementName: z.string().min(1, "Entitlement name is required"),
  isActive: z.boolean().default(true),
})

// Schema for updating a package
export const updatePackageSchema = z.object({
  name: z.string().min(1, "Package name is required").optional(),
  entitlementName: z.string().min(1, "Entitlement name is required").optional(),
  isActive: z.boolean().optional(),
})

// Schema for adding modules to a package
export const addModulesToPackageSchema = z.object({
  moduleIds: z.array(z.string()).min(1, "At least one module ID is required"),
})

export type CreatePackageInput = z.infer<typeof createPackageSchema>
export type UpdatePackageInput = z.infer<typeof updatePackageSchema>
export type AddModulesToPackageInput = z.infer<typeof addModulesToPackageSchema>
