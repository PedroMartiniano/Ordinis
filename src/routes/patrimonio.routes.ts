import { Router } from "express";
import { CreatePatrimonioController } from "../modules/patrimonio/createPatrimonio/CreatePatrimonioController";
import { ensureAuthPermissao } from "../middlewares/ensureAuthPermissao";
import { GetPatrimonioByIdController } from "../modules/patrimonio/getPatrimonioById/GetPatrimonioByIdController";
import { CadastrarBaixaPatrController } from "../modules/patrimonio/baixaPatrimonio/CadastrarBaixaPatrController";
import { EditPatrimonioController } from "../modules/patrimonio/editPatrimonio/EditPatrimonioController";
import { GetAllPatrimoniosController } from "../modules/patrimonio/getAllPatrimonios/GetAllPatrimoniosController";
import { SearchPatrimonioController } from "../modules/patrimonio/searchPatrimonio/SearchPatrimonioController";

export const patrimonioRoutes = Router()

const createPatrimonioController = new CreatePatrimonioController
const getPatrimonioByIdController = new GetPatrimonioByIdController
const cadastrarBaixaPatrController = new CadastrarBaixaPatrController
const editPatrimonioController = new EditPatrimonioController
const getAllPatrimoniosController = new GetAllPatrimoniosController
const searchPatrimonioController = new SearchPatrimonioController

patrimonioRoutes.post('/create', ensureAuthPermissao('ADMINISTRADOR'), (req, res, next) => {
    createPatrimonioController.handle(req, res, next)
})

patrimonioRoutes.put('/update/:id', (req, res, next) => {
    editPatrimonioController.handle(req, res, next)
})

patrimonioRoutes.get('/get-all', (req, res, next) => {
    getAllPatrimoniosController.handle(req, res, next)
})

patrimonioRoutes.get('/get/:id', (req, res, next) => {
    getPatrimonioByIdController.handle(req, res, next)
})

patrimonioRoutes.delete('/baixa/:id', ensureAuthPermissao('ADMINISTRADOR'), (req, res, next) => {
    cadastrarBaixaPatrController.handle(req, res, next)
})

patrimonioRoutes.get('/search', (req, res, next) => {
    searchPatrimonioController.handle(req, res, next)
})