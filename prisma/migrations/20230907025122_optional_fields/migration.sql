-- AlterTable
ALTER TABLE `Manutencao` MODIFY `data_fim` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Patrimonio` MODIFY `data_saida` DATETIME(3) NULL,
    MODIFY `resp_retirada` VARCHAR(191) NULL;
