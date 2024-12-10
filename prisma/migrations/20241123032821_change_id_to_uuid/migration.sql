/*
  Warnings:

  - The primary key for the `Insumo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category` on the `Insumo` table. All the data in the column will be lost.
  - You are about to drop the column `costPrice` on the `Insumo` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Insumo` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Insumo` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Insumo` table. All the data in the column will be lost.
  - You are about to drop the column `subcategory` on the `Insumo` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Insumo_available_category_idx` ON `Insumo`;

-- DropIndex
DROP INDEX `Insumo_available_subcategory_idx` ON `Insumo`;

-- AlterTable
ALTER TABLE `Insumo` DROP PRIMARY KEY,
    DROP COLUMN `category`,
    DROP COLUMN `costPrice`,
    DROP COLUMN `location`,
    DROP COLUMN `name`,
    DROP COLUMN `price`,
    DROP COLUMN `subcategory`,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);
