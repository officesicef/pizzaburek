/*
  Warnings:

  - The primary key for the `OrganizationAccessHistory` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "OrganizationAccessHistory" DROP CONSTRAINT "OrganizationAccessHistory_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isInfected" BOOLEAN NOT NULL DEFAULT false;
