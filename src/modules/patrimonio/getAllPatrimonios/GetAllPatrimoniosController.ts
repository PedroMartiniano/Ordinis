import { NextFunction, Request, Response } from "express";
import { GetAllPatrimoniosUseCase } from "./GetAllPatrimoniosUseCase";

export class GetAllPatrimoniosController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const patrimonios = await GetAllPatrimoniosUseCase.execute()

        return res.status(200).json(patrimonios)
    }
}