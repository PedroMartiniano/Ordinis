import { Router } from "express";
import { CreateLocalizacaoController } from "../modules/localizacao/createLocalizacao/CreateLocalizacaoController";
import { GetLocByIdController } from "../modules/localizacao/getLocalizacaoById/GetLocByIdController";
import { GetAllLocalizacoesController } from "../modules/localizacao/getAllLocalizacoes/GetAllLocalizacoesController";

export const localizacaoRoutes = Router()

const createLocalizacaoController = new CreateLocalizacaoController
const getLocByIdController = new GetLocByIdController
const getAllLocalizacoesController = new GetAllLocalizacoesController

localizacaoRoutes.post('/create', (req, res, next) => {
    createLocalizacaoController.handle(req, res, next)
})

localizacaoRoutes.get('/get/:id', (req, res, next) => {
    getLocByIdController.handle(req, res, next)
})

localizacaoRoutes.get('/get-all', (req, res, next) => {
    getAllLocalizacoesController.handle(req, res, next)
})