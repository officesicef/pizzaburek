/*
  Warnings:

  - You are about to drop the column `activeInstitutionId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `oib` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `UserHasInstitution` table. All the data in the column will be lost.
  - Added the required column `qrCode` to the `Institution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `covidConfirmation` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isConfirmed` to the `UserHasInstitution` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_activeInstitutionId_fkey";

-- DropIndex
DROP INDEX "User.activeInstitutionId_unique";

-- AlterTable
ALTER TABLE "Institution" ADD COLUMN     "qrCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "activeInstitutionId",
DROP COLUMN "oib",
ADD COLUMN     "covidConfirmation" TEXT NOT NULL,
ADD COLUMN     "firstName" VARCHAR(50) NOT NULL,
ADD COLUMN     "lastName" VARCHAR(50) NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserHasInstitution" DROP COLUMN "role",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isConfirmed" BOOLEAN NOT NULL;

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "OrganizationAccessHistory" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "institutionId" INTEGER NOT NULL,

    PRIMARY KEY ("userId","institutionId")
);

-- CreateTable
CREATE TABLE "Report" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "institutionId" INTEGER NOT NULL,

    PRIMARY KEY ("userId")
);

-- AddForeignKey
ALTER TABLE "OrganizationAccessHistory" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationAccessHistory" ADD FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
