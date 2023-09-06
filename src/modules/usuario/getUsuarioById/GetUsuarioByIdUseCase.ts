import { Usuario } from "@prisma/client";
import { prisma } from "../../../lib/prisma";
import { AppError } from "../../../errors/AppError";

export class GetUsuarioByIdUseCase {
    async execute(id: string): Promise<Usuario | null> {
        try {
            const usuario = await prisma.usuario.findUnique({
                where: {
                    id
                }
            })

            return usuario
        } catch {
            return null
        }
    }
}