import { z } from "zod"

// Schema for creating a package
export const createPackageSchema = z.object({
  name: z.string().min(1, "Package name is required"),
  description: z.string().optional(),
  isActive: z.boolean().default(true),
});


// Schema for updating a package
export const updatePackageSchema = z.object({
  name: z.string().min(1).optional(),
  productId: z.string().min(1).optional(),
  isActive: z.boolean().optional(),
});

// Schema for adding modules to a package
export const addModulesToPackageSchema = z.object({
  moduleTierIds: z
    .array(z.string().min(1))
    .min(1, "At least one moduleTierId is required"),
});

export type CreatePackageInput = z.infer<typeof createPackageSchema>
export type UpdatePackageInput = z.infer<typeof updatePackageSchema>
export type AddModulesToPackageInput = z.infer<typeof addModulesToPackageSchema>
