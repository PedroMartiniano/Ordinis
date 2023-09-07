import { Router } from "express";
import { CreatePatrimonioController } from "../modules/patrimonio/createPatrimonio/CreatePatrimonioController";
import { ensureAuthPermissao } from "../middlewares/ensureAuthPermissao";
import { CreateCategoriaController } from "../modules/categoria/createCategoria/CreateCategoriaController";
import { CreateLocalizacaoController } from "../modules/localizacao/createLocalizacao/CreateLocalizacaoController";

export const patrimonioRoutes = Router()

const createPatrimonioController = new CreatePatrimonioController
const createCategoriaController = new CreateCategoriaController
const createLocalizacaoController = new CreateLocalizacaoController

patrimonioRoutes.post('/create', ensureAuthPermissao('ADMINISTRADOR'), (req, res, next) => {
    createPatrimonioController.handle(req, res, next)
})

patrimonioRoutes.post('/create/categoria', (req, res, next) => {
    createCategoriaController.handle(req, res, next)
})

patrimonioRoutes.post('/create/localizacao', (req, res, next) => {
    createLocalizacaoController.handle(req, res, next)
})