/*
  Warnings:

  - You are about to drop the column `createAt` on the `Insumo` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Insumo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "category" TEXT NOT NULL,
    "subcategory" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "costPrice" REAL NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Insumo" ("available", "category", "code", "condition", "costPrice", "createdAt", "description", "id", "name", "price", "subcategory") SELECT "available", "category", "code", "condition", "costPrice", "createdAt", "description", "id", "name", "price", "subcategory" FROM "Insumo";
DROP TABLE "Insumo";
ALTER TABLE "new_Insumo" RENAME TO "Insumo";
CREATE INDEX "Insumo_available_idx" ON "Insumo"("available");
CREATE INDEX "Insumo_available_category_idx" ON "Insumo"("available", "category");
CREATE INDEX "Insumo_available_subcategory_idx" ON "Insumo"("available", "subcategory");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
