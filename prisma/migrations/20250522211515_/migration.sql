/*
  Warnings:

  - You are about to drop the column `entitlementName` on the `ModuleTier` table. All the data in the column will be lost.
  - You are about to drop the column `iconUrl` on the `ModuleTier` table. All the data in the column will be lost.
  - You are about to drop the column `entitlementName` on the `Package` table. All the data in the column will be lost.
  - You are about to drop the column `appleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `googleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `PackageModule` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Module` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productId]` on the table `ModuleTier` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[entitlementId]` on the table `ModuleTier` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Package` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productId]` on the table `Package` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `entitlementId` to the `ModuleTier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `ModuleTier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `Package` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PackageModule" DROP CONSTRAINT "PackageModule_moduleId_fkey";

-- DropForeignKey
ALTER TABLE "PackageModule" DROP CONSTRAINT "PackageModule_packageId_fkey";

-- DropIndex
DROP INDEX "ModuleTier_entitlementName_key";

-- DropIndex
DROP INDEX "Package_entitlementName_key";

-- DropIndex
DROP INDEX "User_appleId_key";

-- DropIndex
DROP INDEX "User_googleId_key";

-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "iconUrl" TEXT;

-- AlterTable
ALTER TABLE "ModuleTier" DROP COLUMN "entitlementName",
DROP COLUMN "iconUrl",
ADD COLUMN     "entitlementId" TEXT NOT NULL,
ADD COLUMN     "productId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Package" DROP COLUMN "entitlementName",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "productId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "appleId",
DROP COLUMN "googleId";

-- DropTable
DROP TABLE "PackageModule";

-- CreateTable
CREATE TABLE "PackageTier" (
    "id" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,
    "moduleTierId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PackageTier_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PackageTier_packageId_moduleTierId_key" ON "PackageTier"("packageId", "moduleTierId");

-- CreateIndex
CREATE UNIQUE INDEX "Module_name_key" ON "Module"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ModuleTier_productId_key" ON "ModuleTier"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "ModuleTier_entitlementId_key" ON "ModuleTier"("entitlementId");

-- CreateIndex
CREATE UNIQUE INDEX "Package_name_key" ON "Package"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Package_productId_key" ON "Package"("productId");

-- AddForeignKey
ALTER TABLE "PackageTier" ADD CONSTRAINT "PackageTier_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackageTier" ADD CONSTRAINT "PackageTier_moduleTierId_fkey" FOREIGN KEY ("moduleTierId") REFERENCES "ModuleTier"("id") ON DELETE CASCADE ON UPDATE CASCADE;
