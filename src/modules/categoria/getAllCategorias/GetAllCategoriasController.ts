import { NextFunction, Request, Response } from "express";
import { GetAllCategoriasUseCase } from "./GetAllCategoriasUseCase";

export class GetAllCategoriasController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const categorias = await GetAllCategoriasUseCase.execute()

        if (!categorias) {
            return res.status(500).json({ success: false, message: 'Internal server error!' })
        }

        if (!categorias[0]) {
            return res.status(400).send({ success: false, data: categorias })
        }

        return res.status(200).json({ success: true, data: categorias })
    }
}