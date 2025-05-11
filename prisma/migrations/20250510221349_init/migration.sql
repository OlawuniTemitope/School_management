/*
  Warnings:

  - You are about to drop the column `parentId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `teacherId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_parentId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_studentId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_teacherId_fkey";

-- DropIndex
DROP INDEX "Parent_phone_key";

-- DropIndex
DROP INDEX "Student_phone_key";

-- DropIndex
DROP INDEX "Teacher_phone_key";

-- DropIndex
DROP INDEX "User_parentId_key";

-- DropIndex
DROP INDEX "User_studentId_key";

-- DropIndex
DROP INDEX "User_teacherId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "parentId",
DROP COLUMN "studentId",
DROP COLUMN "teacherId";
