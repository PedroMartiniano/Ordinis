import { Patrimonio } from "@prisma/client";
import { prisma } from "../../../lib/prisma";

export class GetPatrByIdEditedUseCase {
    async execute(id: string): Promise<Patrimonio | null> {
        try {
            const patrimonio = await prisma.patrimonio.findUnique({
                where: {
                    id
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
                            descricao: true
                        }
                    },
                    localizacao: {
                        select: {
                            descricao: true
                        }
                    },
                    id_usuario: true
                }
            })

            if (!patrimonio) {
                return null
            }


            const patrimonioEdited = {
                ...patrimonio,
                categoria: undefined,
                localizacao: undefined,
                id_categoria: patrimonio.categoria.descricao,
                id_localizacao: patrimonio.localizacao.descricao
            }

            return patrimonioEdited
        } catch {
            return null
        }
    }
}