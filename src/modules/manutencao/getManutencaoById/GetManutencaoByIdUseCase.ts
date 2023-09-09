import { Manutencao } from "@prisma/client";
import { prisma } from "../../../lib/prisma";

export class GetManutencaoByIdUseCase {
    async execute(id: string): Promise<Manutencao | null> {
        try {
            const manutencao = await prisma.manutencao.findUnique({
                where: {
                    id
                }
            })

            return manutencao
        } catch {
            return null
        }
    }
}