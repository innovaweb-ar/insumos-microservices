/*
  Warnings:

  - You are about to drop the column `updateAt` on the `Insumo` table. All the data in the column will be lost.
  - Added the required column `committedStock` to the `Insumo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentStock` to the `Insumo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `incomingStock` to the `Insumo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Insumo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minimunStock` to the `Insumo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Insumo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Insumo` DROP COLUMN `updateAt`,
    ADD COLUMN `committedStock` INTEGER NOT NULL,
    ADD COLUMN `currentStock` INTEGER NOT NULL,
    ADD COLUMN `incomingStock` INTEGER NOT NULL,
    ADD COLUMN `location` VARCHAR(191) NOT NULL,
    ADD COLUMN `minimunStock` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
