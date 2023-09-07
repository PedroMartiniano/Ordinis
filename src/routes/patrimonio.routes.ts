import { Router } from "express";
import { CreatePatrimonioController } from "../modules/patrimonio/createPatrimonio/CreatePatrimonioController";
import { ensureAuthPermissao } from "../middlewares/ensureAuthPermissao";
import { GetPatrimonioByIdController } from "../modules/patrimonio/getPatrimonioById/GetPatrimonioByIdController";
import { CadastrarBaixaPatrController } from "../modules/patrimonio/baixaPatrimonio/CadastrarBaixaPatrController";

export const patrimonioRoutes = Router()

const createPatrimonioController = new CreatePatrimonioController
const getPatrimonioByIdController = new GetPatrimonioByIdController
const cadastrarBaixaPatrController = new CadastrarBaixaPatrController

patrimonioRoutes.post('/create', ensureAuthPermissao('ADMINISTRADOR'), (req, res, next) => {
    createPatrimonioController.handle(req, res, next)
})

patrimonioRoutes.get('/get/:id', (req, res, next) => {
    getPatrimonioByIdController.handle(req, res, next)
})

patrimonioRoutes.delete('/baixa/:id', (req, res, next) => {
    cadastrarBaixaPatrController.handle(req, res, next)
})