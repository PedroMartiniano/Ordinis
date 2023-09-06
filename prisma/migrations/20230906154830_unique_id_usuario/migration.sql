/*
  Warnings:

  - A unique constraint covering the columns `[id_usuario]` on the table `Sessao` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Sessao_id_usuario_key` ON `Sessao`(`id_usuario`);
