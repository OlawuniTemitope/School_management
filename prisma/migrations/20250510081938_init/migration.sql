/*
  Warnings:

  - Added the required column `firstName` to the `Parent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Parent" ADD COLUMN     "firstName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "firstName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "firstName" TEXT NOT NULL;
