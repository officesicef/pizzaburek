/*
  Warnings:

  - You are about to drop the column `createdAt` on the `OrganizationAccessHistory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OrganizationAccessHistory" DROP COLUMN "createdAt",
ADD COLUMN     "checkedIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "checkedOut" TIMESTAMP(3);
