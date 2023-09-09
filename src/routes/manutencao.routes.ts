import { Router } from "express";
import { CreateManutencaoController } from "../modules/manutencao/createManutencao/CreateManutencaoController";

export const manutencaoRoutes = Router()

const createManutencaoController = new CreateManutencaoController

manutencaoRoutes.post('/create/:id_patrimonio', (req, res, next) => {
    createManutencaoController.handle(req, res, next)
})