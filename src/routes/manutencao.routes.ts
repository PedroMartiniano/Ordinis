import { Router } from "express";
import { CreateManutencaoController } from "../modules/manutencao/createManutencao/CreateManutencaoController";
import { GetManutencaoByIdController } from "../modules/manutencao/getManutencaoById/GetManutencaoByIdController";
import { GetManutencaoByPatrController } from "../modules/manutencao/GetManutencaoByPatr/GetManutencaoByPatrController";
import { GetManutencaoByPrestadorController } from "../modules/manutencao/getManutencaoByPrestador/GetManutencaoByPrestadoController";
import { BaixaManutencaoController } from "../modules/manutencao/baixaManutencao/BaixaManutencaoController";

export const manutencaoRoutes = Router()

const createManutencaoController = new CreateManutencaoController
const getManutencaoByIdController = new GetManutencaoByIdController
const getManutecoesByIdPatrController = new GetManutencaoByPatrController
const getManutencaoByPrestadorController = new GetManutencaoByPrestadorController
const baixaManutencaoController = new BaixaManutencaoController

manutencaoRoutes.post('/create/:id_patrimonio', (req, res, next) => {
    createManutencaoController.handle(req, res, next)
})

manutencaoRoutes.put('/baixa/:id', (req, res, next) => {
    baixaManutencaoController.handle(req, res, next)
})

manutencaoRoutes.get('/get/:id', (req, res, next) => {
    getManutencaoByIdController.handle(req, res, next)
})

manutencaoRoutes.get('/get/patr/:id_patrimonio', (req, res, next) => {
    getManutecoesByIdPatrController.handle(req, res, next)
})

manutencaoRoutes.get('/get/prestador/:id_prestador', (req, res, next) => {
    getManutencaoByPrestadorController.handle(req, res, next)
})