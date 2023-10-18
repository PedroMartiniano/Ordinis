import { prisma } from "../../../lib/prisma"

export class GetAllManutencoesUseCase {
    static async execute() {
        try {
            const manutencoes = await prisma.manutencao.findMany({
                orderBy: {
                    data_inicio: 'desc'
                }
            })

            return manutencoes
        } catch {
            return null
        }
    }
}