import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { AppError } from "../../../errors/AppError";
import { CreateLocalizacaoUseCase } from "./CreateLocalizacaoUseCase";

export class CreateLocalizacaoController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const localizacaoSchema = z.object({
            descricao: z.string()
        })

        const localizacaoBody = localizacaoSchema.safeParse(req.body)

        if (!localizacaoBody.success) {
            return next(new AppError('Informações inválidas.'))
        }

        const { descricao } = localizacaoBody.data

        const createLocalizacao = new CreateLocalizacaoUseCase
        const localizacao = await createLocalizacao.execute(descricao)

        if (!localizacao) {
            return res.status(400).json({ success: false })
        }

        return res.status(201).json({ success: true, data: localizacao })
    }
}