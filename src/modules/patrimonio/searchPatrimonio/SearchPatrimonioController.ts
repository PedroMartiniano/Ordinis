import { NextFunction, Request, Response } from "express";
import { GetAllPatrimoniosUseCase } from "../getAllPatrimonios/GetAllPatrimoniosUseCase";
import { searchParams } from "./searchParams";
import { SearchPatrimonioUseCase } from "./SearchPatrimonioUseCase";

export class SearchPatrimonioController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const keys = Object.keys(req.query)
        const values = Object.values(req.query)

        if (keys.length === 0) {
            const allPatrimonios = await GetAllPatrimoniosUseCase.execute()

            return res.status(200).json({ success: true, data: allPatrimonios })
        }

        const searchs = searchParams(keys, values)

        const searchPatrimonioUseCase = new SearchPatrimonioUseCase
        const patrimonios = await searchPatrimonioUseCase.execute(searchs)

        return res.status(200).json({ success: true, data: patrimonios })
    }
}