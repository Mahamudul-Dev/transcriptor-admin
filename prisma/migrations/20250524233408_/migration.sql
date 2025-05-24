/*
  Warnings:

  - A unique constraint covering the columns `[userId,moduleTierId]` on the table `ModuleUsage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ModuleUsage_userId_moduleTierId_key" ON "ModuleUsage"("userId", "moduleTierId");
