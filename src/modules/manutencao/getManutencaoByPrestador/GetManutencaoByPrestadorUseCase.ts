import { Manutencao } from "@prisma/client";
import { prisma } from "../../../lib/prisma";

export class GetManutencaoByPrestadorUseCase {
    async execute(id_prestador: string): Promise<Manutencao[] | null> {
        try {
            const manutencoes = await prisma.manutencao.findMany({
                where: {
                    id_prestador
                }
            })

            return manutencoes
        } catch {
            return null
        }
    }
}