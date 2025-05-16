/*
  Warnings:

  - You are about to drop the column `price` on the `ModuleTier` table. All the data in the column will be lost.
  - You are about to drop the column `usageLimit` on the `ModuleTier` table. All the data in the column will be lost.
  - You are about to drop the column `moduleId` on the `ModuleUsage` table. All the data in the column will be lost.
  - You are about to drop the column `usageCount` on the `ModuleUsage` table. All the data in the column will be lost.
  - You are about to drop the column `moduleId` on the `UserModule` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,moduleTierId]` on the table `UserModule` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `moduleTierId` to the `ModuleUsage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moduleTierId` to the `UserModule` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ModuleUsage" DROP CONSTRAINT "ModuleUsage_moduleId_fkey";

-- DropForeignKey
ALTER TABLE "UserModule" DROP CONSTRAINT "UserModule_moduleId_fkey";

-- DropIndex
DROP INDEX "UserModule_userId_moduleId_key";

-- AlterTable
ALTER TABLE "ModuleTier" DROP COLUMN "price",
DROP COLUMN "usageLimit",
ADD COLUMN     "conclusionLimit" INTEGER NOT NULL DEFAULT 5,
ADD COLUMN     "mapLimit" INTEGER NOT NULL DEFAULT 5,
ADD COLUMN     "textProductionLimit" INTEGER NOT NULL DEFAULT -1;

-- AlterTable
ALTER TABLE "ModuleUsage" DROP COLUMN "moduleId",
DROP COLUMN "usageCount",
ADD COLUMN     "conclusionCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "mapCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "moduleTierId" TEXT NOT NULL,
ADD COLUMN     "textProductionCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "UserModule" DROP COLUMN "moduleId",
ADD COLUMN     "moduleTierId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserModule_userId_moduleTierId_key" ON "UserModule"("userId", "moduleTierId");

-- AddForeignKey
ALTER TABLE "UserModule" ADD CONSTRAINT "UserModule_moduleTierId_fkey" FOREIGN KEY ("moduleTierId") REFERENCES "ModuleTier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleUsage" ADD CONSTRAINT "ModuleUsage_moduleTierId_fkey" FOREIGN KEY ("moduleTierId") REFERENCES "ModuleTier"("id") ON DELETE CASCADE ON UPDATE CASCADE;
