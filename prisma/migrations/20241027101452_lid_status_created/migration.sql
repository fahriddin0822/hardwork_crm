-- AlterTable
ALTER TABLE "branch" ALTER COLUMN "call_numer" DROP NOT NULL;

-- CreateTable
CREATE TABLE "LidStatus" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "LidStatus_pkey" PRIMARY KEY ("id")
);
