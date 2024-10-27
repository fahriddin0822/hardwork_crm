/*
  Warnings:

  - You are about to drop the `branch` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "branch";

-- CreateTable
CREATE TABLE "Branch" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "call_numer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stuff" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL,

    CONSTRAINT "Stuff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group" (
    "id" SERIAL NOT NULL,
    "group_name" TEXT NOT NULL,
    "lesson_start_time" TEXT NOT NULL,
    "lesson_continuous" TEXT NOT NULL,
    "lesson_week_day" TEXT[],
    "group_stage_id" INTEGER NOT NULL,
    "room_number" TEXT NOT NULL,
    "room_floor" INTEGER NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "lessons_quant" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "branchId" INTEGER,

    CONSTRAINT "group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Stage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lid" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "target_id" INTEGER NOT NULL,
    "lid_stage_id" INTEGER NOT NULL,
    "test_date" TIMESTAMP(3) NOT NULL,
    "trial_lesson_date" TIMESTAMP(3) NOT NULL,
    "trial_lesson_time" TEXT NOT NULL,
    "trial_lesson_group_id" INTEGER NOT NULL,
    "lid_status_id" INTEGER NOT NULL,
    "cancel_reason_id" INTEGER,

    CONSTRAINT "Lid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Target" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Target_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "payment_last_date" TEXT NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "is_paid" BOOLEAN NOT NULL,
    "total_attent" INTEGER NOT NULL,
    "studentsId" INTEGER,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Students" (
    "id" SERIAL NOT NULL,
    "lid_id" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "gender" BOOLEAN NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lessons" (
    "id" SERIAL NOT NULL,
    "lesson_theme" TEXT NOT NULL,
    "lesson_number" INTEGER NOT NULL,
    "group_id" INTEGER NOT NULL,
    "lesson_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lessons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentLessons" (
    "id" SERIAL NOT NULL,
    "lesson_id" INTEGER NOT NULL,
    "student_id" INTEGER NOT NULL,
    "is_there" BOOLEAN NOT NULL,
    "reason" TEXT NOT NULL,
    "is_paid" BOOLEAN NOT NULL,

    CONSTRAINT "StudentLessons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Branch_address_key" ON "Branch"("address");

-- AddForeignKey
ALTER TABLE "group" ADD CONSTRAINT "group_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lid" ADD CONSTRAINT "Lid_lid_status_id_fkey" FOREIGN KEY ("lid_status_id") REFERENCES "LidStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lid" ADD CONSTRAINT "Lid_cancel_reason_id_fkey" FOREIGN KEY ("cancel_reason_id") REFERENCES "LidReason"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_studentsId_fkey" FOREIGN KEY ("studentsId") REFERENCES "Students"("id") ON DELETE SET NULL ON UPDATE CASCADE;
