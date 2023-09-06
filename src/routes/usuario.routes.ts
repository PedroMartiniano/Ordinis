import { Router } from "express"
import { CreateUsuarioController } from "../modules/usuario/createUsuario/CreateUsuarioController"
import { GetUsuarioByIdController } from "../modules/usuario/getUsuarioById/GetUsuarioByIdController"

export const usuarioRouter = Router()

const createUsuarioController = new CreateUsuarioController
const getUsuarioByIdController = new GetUsuarioByIdController

usuarioRouter.post('/create', (req, res, next) => {
    createUsuarioController.handle(req, res, next)
})

usuarioRouter.get('/get/:id', (req, res, next) => {
    getUsuarioByIdController.handle(req, res, next)
})

