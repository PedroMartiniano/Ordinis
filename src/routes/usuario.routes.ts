import { Router } from "express"
import { CreateUsuarioController } from "../modules/usuario/createUsuario/CreateUsuarioController"
import { GetUsuarioByIdController } from "../modules/usuario/getUsuarioById/GetUsuarioByIdController"
import { ensureAuthPermissao } from "../middlewares/ensureAuthPermissao"
import { DeleteUsuarioController } from "../modules/usuario/deleteUsuario/DeleteUsuarioController"

export const usuarioRouter = Router()

const createUsuarioController = new CreateUsuarioController
const getUsuarioByIdController = new GetUsuarioByIdController
const deleteUsuarioCOntroller = new DeleteUsuarioController

usuarioRouter.use(ensureAuthPermissao('ADMINISTRADOR'))

usuarioRouter.post('/create', (req, res, next) => {
    createUsuarioController.handle(req, res, next)
})

usuarioRouter.get('/get/:id', (req, res, next) => {
    getUsuarioByIdController.handle(req, res, next)
})

usuarioRouter.delete('/delete/:id', (req, res, next) => {
    deleteUsuarioCOntroller.handle(req, res, next)
})