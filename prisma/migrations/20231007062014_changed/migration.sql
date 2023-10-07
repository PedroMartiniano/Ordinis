/*
  Warnings:

  - The values [EXECELENTE] on the enum `Patrimonio_estado` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Patrimonio` MODIFY `estado` ENUM('EXCELENTE', 'OTIMO', 'REGULAR', 'RUIM', 'PESSIMO') NOT NULL;
