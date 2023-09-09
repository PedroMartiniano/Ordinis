import { Router } from "express";
import { CreatePrestadorController } from "../modules/prestador/createPrestador/CreatePrestadorController";
import { GetPrestadorByIdController } from "../modules/prestador/getPrestadorById/GetPrestadorByIdController";

export const prestadorRoutes = Router()

const createPrestadorController = new CreatePrestadorController
const getPrestadorByIdController = new GetPrestadorByIdController

prestadorRoutes.post('/create', (req, res, next) => {
    createPrestadorController.handle(req, res, next)
})

prestadorRoutes.get('/get/:id', (req, res, next) => {
    getPrestadorByIdController.handle(req, res, next)
})