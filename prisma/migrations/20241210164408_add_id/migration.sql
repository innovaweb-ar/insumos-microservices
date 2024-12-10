/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Insumo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Insumo_code_key` ON `Insumo`(`code`);
