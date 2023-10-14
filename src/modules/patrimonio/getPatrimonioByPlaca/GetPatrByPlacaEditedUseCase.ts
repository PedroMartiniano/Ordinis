import { prisma } from "../../../lib/prisma";
import { PatrimonioNamesProps } from "../../../types/patrimonio-names";

export class GetPatrByPlacaEditedUseCase {
    async execute(placa: string): Promise<PatrimonioNamesProps | null> {
        try {
            const patrimonio = await prisma.patrimonio.findUnique({
                where: {
                    placa
                },
                select: {
                    id: true,
                    placa: true,
                    descricao: true,
                    estado: true,
                    valor: true,
                    origem: true,
                    status: true,
                    data_entrada: true,
                    data_saida: true,
                    resp_entrega: true,
                    resp_retirada: true,
                    categoria: {
                        select: {
                            id: true,
                            descricao: true
                        }
                    },
                    localizacao: {
                        select: {
                            id: true,
                            descricao: true
                        }
                    },
                    id_usuario: true
                }
            })

            if (!patrimonio) {
                return null
            }

            return patrimonio
        } catch {
            return null
        }
    }
}