import { prisma } from "../../../lib/prisma"

export class GetAllUsuariosUseCase {
    static async execute() {
        try {
            const usuarios = await prisma.usuario.findMany({
                where: {
                    status: 1
                }
            })

            return usuarios
        } catch {
            return null
        }
    }
}