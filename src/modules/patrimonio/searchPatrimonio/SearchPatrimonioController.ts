import { NextFunction, Request, Response } from "express";
import { GetAllPatrimoniosUseCase } from "../getAllPatrimonios/GetAllPatrimoniosUseCase";
import { searchParams } from "./searchParams";

export class SearchPatrimonioController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const keys = Object.keys(req.query)
        const values = Object.values(req.query)

        if (keys.length === 0) {
            const patrimonios = await GetAllPatrimoniosUseCase.execute()

            return res.status(200).json({ success: true, data: patrimonios })
        }

        const searchs = searchParams(keys, values)
        console.log(searchs)

        return res.status(200).json('ok')
    }
}