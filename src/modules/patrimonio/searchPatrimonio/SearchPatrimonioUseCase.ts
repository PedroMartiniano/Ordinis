import { Patrimonio } from "@prisma/client";
import { prisma } from "../../../lib/prisma";

export class SearchPatrimonioUseCase {
    async execute(search: any): Promise<Patrimonio[] | null> {
        try {
            const patrimonios = await prisma.patrimonio.findMany({
                where: search
                
            })

            return patrimonios
        } catch {
            return null
        }
    }
}