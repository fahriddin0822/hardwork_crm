/*
  Warnings:

  - You are about to drop the column `password` on the `Staff` table. All the data in the column will be lost.
  - Added the required column `hashed_password` to the `Staff` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Staff" DROP COLUMN "password",
ADD COLUMN     "hashed_password" TEXT NOT NULL;
