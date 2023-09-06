import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { AppError } from "../../../errors/AppError";
import { GetUsuarioByEmailUseCase } from "../getUsuarioByEmail/GetUsuarioByEmailUseCase";
import { AuthUsuarioUseCase } from "./AuthUsuarioUseCase";

export class AuthUsuarioController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const authSchema = z.object({
            email: z.string().email(),
            senha: z.string().min(6)
        })

        const authBody = authSchema.safeParse(req.body)

        if (!authBody.success) {
            return res.status(400).json({
                success: false,
                message: "Email ou senha incorretos."
            })
        }

        const { email, senha } = authBody.data

        const getUsuarioByEmail = new GetUsuarioByEmailUseCase
        const usuario = await getUsuarioByEmail.execute(email)

        if (!usuario) {
            return res.status(400).json({
                success: false,
                message: "Email ou senha incorretos."
            })
        }

        if (!usuario.status) {
            return res.status(400).json({
                success: false,
                message: "Conta desativada."
            })
        }

        const authUsuarioUseCase = new AuthUsuarioUseCase
        const auth = await authUsuarioUseCase.execute({ id: usuario.id, senha, hashSenha: usuario.senha, permissao: usuario.permissao })

        if (!auth.success) {
            return res.status(400).json({
                success: false,
                message: "Email ou senha incorretos."
            })
        }

        return res.status(200).json({ token: auth.token })
    }
}