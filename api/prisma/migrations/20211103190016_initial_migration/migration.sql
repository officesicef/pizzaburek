-- CreateEnum
CREATE TYPE "Role" AS ENUM ('EMPLOYER', 'ADMIN');

-- CreateTable
CREATE TABLE "UserHasInstitution" (
    "userId" INTEGER NOT NULL,
    "institutionId" INTEGER NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'EMPLOYER',

    PRIMARY KEY ("userId","institutionId")
);

-- CreateTable
CREATE TABLE "Institution" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "oib" VARCHAR(11) NOT NULL,
    "password" TEXT NOT NULL,
    "accessKey" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activeInstitutionId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.activeInstitutionId_unique" ON "User"("activeInstitutionId");

-- AddForeignKey
ALTER TABLE "UserHasInstitution" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserHasInstitution" ADD FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("activeInstitutionId") REFERENCES "Institution"("id") ON DELETE SET NULL ON UPDATE CASCADE;
