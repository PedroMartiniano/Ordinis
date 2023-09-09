import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { AppError } from "../../../errors/AppError";
import { GetManutencaoByIdPatrUseCase } from "./GetManutencaoByPatrUseCase";

export class GetManutencaoByPatrController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const idPatrSchema = z.object({
            id_patrimonio: z.string()
        })

        const idPatrParam = idPatrSchema.safeParse(req.params)

        if (!idPatrParam.success) {
            return next(new AppError('Informação id patrimonio faltando.'))
        }

        const { id_patrimonio } = idPatrParam.data

        const getManutencoesByIdPatr = new GetManutencaoByIdPatrUseCase
        const manutencoes = await getManutencoesByIdPatr.execute(id_patrimonio)

        return res.status(200).json(manutencoes)
    }
}