/*
  Warnings:

  - Made the column `firstName` on table `Parent` required. This step will fail if there are existing NULL values in that column.
  - Made the column `firstName` on table `Teacher` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Parent" ALTER COLUMN "firstName" SET NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" ALTER COLUMN "firstName" SET NOT NULL;
