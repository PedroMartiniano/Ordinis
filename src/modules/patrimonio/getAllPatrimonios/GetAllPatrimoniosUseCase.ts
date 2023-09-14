import { Patrimonio } from "@prisma/client";
import { Request } from "express";
import { prisma } from "../../../lib/prisma";

export class GetAllPatrimoniosUseCase {
    static async execute(): Promise<Patrimonio[] | null> {
        try {
            const patrimonios: Patrimonio[]  = await prisma.$queryRaw`
            SELECT p.id, p.placa, p.descricao, p.estado, p.valor, p.origem, p.status, p.data_entrada, p.data_saida, p.resp_entrega, p.resp_retirada, l.descricao id_localizacao, c.descricao id_categoria, p.id_usuario
            FROM patrimonio p
            INNER JOIN localizacao l ON p.id_localizacao = l.id
            INNER JOIN categoria c ON p.id_categoria = c.id
            `

            return patrimonios
        } catch {
            return null
        }
    }
}