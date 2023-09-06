import { Prisma } from "@prisma/client";
import { prisma } from "../../../lib/prisma";
import { hash } from "bcrypt";

export class CreateSessaoUseCase {
    async execute(sessao: Prisma.SessaoUncheckedCreateInput): Promise<boolean> {
        try {
            const { email, senha, id_usuario } = sessao

            const hashSenha = await hash(senha, 4)

            await prisma.sessao.create({
                data: {
                    email,
                    senha: hashSenha,
                    id_usuario
                }
            })

            return true
        } catch {
            return false
        }
    }
}