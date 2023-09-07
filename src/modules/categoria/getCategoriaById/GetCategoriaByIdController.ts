import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { AppError } from "../../../errors/AppError";

export class GetCategoriaByIdController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const idSchema = z.object({
            id: z.string()
        })

        const idBody = idSchema.safeParse(req.params)

        if (!idBody.success) {
            return next(new AppError('Id categoria faltando!'))
        }

        const { id } = idBody.data
    }
}