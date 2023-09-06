import { Router } from "express"
import { AuthUsuarioController } from "../modules/sessao/loginUsuario/AuthUsuarioController"

export const loginRouter = Router()

const authUsuarioController = new AuthUsuarioController

loginRouter.post('/', (req, res, next) => {
    authUsuarioController.handle(req, res, next)
})