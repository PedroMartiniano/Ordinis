import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { AppError } from "../../../errors/AppError";
import { GetManutencaoByPrestadorUseCase } from "./GetManutencaoByPrestadorUseCase";

export class GetManutencaoByPrestadorController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const idPrestadorSchema = z.object({
            id_prestador: z.string()
        })

        const idPrestadorParam = idPrestadorSchema.safeParse(req.params)

        if (!idPrestadorParam.success) {
            return next(new AppError('Informação id prestador de serviços faltando.'))
        }

        const { id_prestador } = idPrestadorParam.data

        const getManutencaoByPrestador = new GetManutencaoByPrestadorUseCase
        const manutencoes = await getManutencaoByPrestador.execute(id_prestador)

        return res.status(200).json(manutencoes)
    }
}