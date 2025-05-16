import { PrismaClient } from '@prisma/client'
import * as bcrypt from "bcrypt"

// For debugging
console.log("Seed script is running...")

const prisma = new PrismaClient()

async function main() {
  try {
    // Create admin user
    console.log("Creating admin user...")
    const hashedPassword = await bcrypt.hash("admin123", 10)

    const user = await prisma.user.upsert({
      where: { email: "admin@transcriptor.com" },
      update: {},
      create: {
        email: "admin@transcriptor.com",
        fullName: "Admin User",
        password: hashedPassword,
        isAdmin: true,
        country: "United States",
        city: "New York",
        profession: "Administrator",
      },
    })

    console.log("Admin user created:", user)
    console.log("Database has been seeded with admin user.")
  } catch (error) {
    console.error("Error in seed script:", error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error("Failed to seed database:", e)
    process.exit(1)
  })
  .finally(async () => {
    console.log("Disconnecting from database...")
    await prisma.$disconnect()
  })
