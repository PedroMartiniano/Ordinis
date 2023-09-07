import { Patrimonio } from "@prisma/client";
import { Request } from "express";
import { prisma } from "../../../lib/prisma";

export class GetAllPatrimoniosUseCase {
    static async execute(): Promise<Patrimonio[] | null> {
        try {
            const patrimonios = await prisma.patrimonio.findMany()

            return patrimonios
        } catch {
            return null
        }
    }
}