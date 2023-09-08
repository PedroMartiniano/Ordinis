import { NextFunction, Request, Response } from "express";
import { GetAllCategoriasUseCase } from "./GetAllCategoriasUseCase";

export class GetAllCategoriasController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const categorias = await GetAllCategoriasUseCase.execute()

        return res.status(200).json(categorias)
    }
}