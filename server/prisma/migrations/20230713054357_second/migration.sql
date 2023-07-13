/*
  Warnings:

  - You are about to alter the column `title` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(1000)` to `VarChar(191)`.
  - You are about to alter the column `body` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(1000)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Post` MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `body` VARCHAR(191) NOT NULL;
