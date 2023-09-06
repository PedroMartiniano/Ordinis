import { Prisma, Usuario } from "@prisma/client";
import { prisma } from "../../../lib/prisma";
import { hash } from "bcrypt";


export class CreateUsuarioUseCase {
    async execute(usuario: Prisma.UsuarioCreateInput): Promise<Usuario | null> {
        try {
            const { nome, sobrenome, permissao, cpf, email, senha } = usuario

            const hashSenha = await hash(senha, 4)

            const createUsuario = await prisma.usuario.create({
                data: {
                    nome,
                    sobrenome,
                    permissao,
                    cpf,
                    email,
                    senha: hashSenha
                }
            })

            return createUsuario
        } catch {
            return null
        }
    }
}