import { Patrimonio } from "@prisma/client";
import { prisma } from "../../../lib/prisma";

export class SearchPatrimonioUseCase {
    async execute(search: any): Promise<Patrimonio[] | null> {
        try {
            const patrimonios = await prisma.patrimonio.findMany({
                where: search,
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

            const patrimoniosEdited = patrimonios.map((patr) => {
                return {
                    ...patr,
                    categoria: undefined,
                    localizacao: undefined,
                    id_categoria: patr.categoria.descricao,
                    id_localizacao: patr.localizacao.descricao
                }
            })

            return patrimoniosEdited
        } catch {
            return null
        }
    }
}