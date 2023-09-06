import { Usuario } from "@prisma/client";
import { UsuarioEdit } from "../../../types/usuario-edit";
import { prisma } from "../../../lib/prisma";

export class EditUsuarioUseCase {
    async execute(usuario: UsuarioEdit): Promise<Usuario | null> {
        try {
            const { nome, sobrenome, cpf, id_usuario } = usuario

            const usuarioEdited = await prisma.usuario.update({
                where: {
                    id: id_usuario
                },
                data: {
                    nome,
                    sobrenome,
                    cpf
                }
            })

            return usuarioEdited
        } catch {
            return null
        }
    }
}