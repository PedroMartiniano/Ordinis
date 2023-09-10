import { NextFunction, Request, Response } from "express";
import { GetAllPrestadoresUseCase } from "./GetAllPrestadoreUseCase";

export class GetAllPrestadoresController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const prestadores = await GetAllPrestadoresUseCase.execute()

        return res.status(200).json(prestadores)
    }
}