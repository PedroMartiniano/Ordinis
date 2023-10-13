import { NextFunction, Request, Response } from "express";
import { GetAllLocalizacoesUseCase } from "./GetAllLocalizacoesUseCase";

export class GetAllLocalizacoesController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const localizacoes = await GetAllLocalizacoesUseCase.execute()

        if (!localizacoes) {
            return res.status(500).json({ success: false, message: 'Internal server error!' })
        }

        if (!localizacoes[0]) {
            return res.status(400).json({ success: false, data: localizacoes })
        }

        return res.status(200).json({ success: true, data: localizacoes })
    }
}