import { Prisma, Usuario } from "@prisma/client";
import { prisma } from "../../../lib/prisma";

export class CreateUsuarioUseCase {
    async execute(usuario: Prisma.UsuarioCreateInput): Promise<Usuario | null> {
        try {
            const { nome, sobrenome, permissao, cpf } = usuario

            const createUsuario = await prisma.usuario.create({
                data: {
                    nome,
                    sobrenome,
                    permissao,
                    cpf
                }
            })

            return createUsuario
        } catch {
            return null
        }
    }
}