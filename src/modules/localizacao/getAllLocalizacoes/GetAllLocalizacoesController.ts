import { NextFunction, Request, Response } from "express";
import { GetAllLocalizacoesUseCase } from "./GetAllLocalizacoesUseCase";

export class GetAllLocalizacoesController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const localizacoes = await GetAllLocalizacoesUseCase.execute()

        return res.status(200).json(localizacoes)
    }
}