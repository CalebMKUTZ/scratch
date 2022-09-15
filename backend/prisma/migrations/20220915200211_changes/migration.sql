/*
  Warnings:

  - You are about to drop the column `userId` on the `ScratchPad` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ScratchPad" DROP CONSTRAINT "ScratchPad_userId_fkey";

-- AlterTable
ALTER TABLE "ScratchPad" DROP COLUMN "userId",
ADD COLUMN     "userEmail" TEXT;

-- AddForeignKey
ALTER TABLE "ScratchPad" ADD CONSTRAINT "ScratchPad_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
