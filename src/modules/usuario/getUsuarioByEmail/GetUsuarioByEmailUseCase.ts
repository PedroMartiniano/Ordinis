import { Usuario } from "@prisma/client";
import { prisma } from "../../../lib/prisma";

export class GetUsuarioByEmailUseCase {
    async execute(email: string): Promise<Usuario | null> {
        try {
            const usuario = await prisma.usuario.findUnique({
                where: {
                    email
                }
            })

            return usuario
        } catch {
            return null
        }
    }
}