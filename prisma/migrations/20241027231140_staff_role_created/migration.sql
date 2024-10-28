/*
  Warnings:

  - You are about to drop the `Staff` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Staff";

-- CreateTable
CREATE TABLE "staff_role" (
    "staffId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "staff_role_pkey" PRIMARY KEY ("staffId","roleId")
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "staff_role" ADD CONSTRAINT "staff_role_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff_role" ADD CONSTRAINT "staff_role_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
