import { Manutencao } from "@prisma/client";
import { prisma } from "../../../lib/prisma";

export class GetManutencaoByIdPatrUseCase {
    async execute(id_patrimonio: string): Promise<Manutencao[] | null> {
        try {
            const manutencoes = await prisma.manutencao.findMany({
                where: {
                    id_patrimonio
                }
            })

            return manutencoes
        } catch {
            return null
        }
    }
}