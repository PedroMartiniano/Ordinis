import { Router } from "express";
import { CreateLocalizacaoController } from "../modules/localizacao/createLocalizacao/CreateLocalizacaoController";
import { GetLocByIdController } from "../modules/localizacao/getLocalizacaoById/GetLocByIdController";

export const localizacaoRoutes = Router()

const createLocalizacaoController = new CreateLocalizacaoController
const getLocById = new GetLocByIdController

localizacaoRoutes.post('/create', (req, res, next) => {
    createLocalizacaoController.handle(req, res, next)
})

localizacaoRoutes.get('/get/:id', (req, res, next) => {
    getLocById.handle(req, res, next)
})