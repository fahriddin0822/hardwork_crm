/*
  Warnings:

  - A unique constraint covering the columns `[address]` on the table `branch` will be added. If there are existing duplicate values, this will fail.
  - Made the column `call_numer` on table `branch` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "branch" ALTER COLUMN "call_numer" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "branch_address_key" ON "branch"("address");
