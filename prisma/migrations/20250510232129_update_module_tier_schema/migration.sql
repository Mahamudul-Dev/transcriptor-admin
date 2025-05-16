/*
  Warnings:

  - Added the required column `revCatEntitlementName` to the `ModuleTier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ModuleTier" ADD COLUMN     "revCatEntitlementName" TEXT NOT NULL,
ADD COLUMN     "webviewUrl" TEXT;
