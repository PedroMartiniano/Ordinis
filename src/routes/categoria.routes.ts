import { Router } from "express";
import { CreateCategoriaController } from "../modules/categoria/createCategoria/CreateCategoriaController";
import { GetCategoriaByIdController } from "../modules/categoria/getCategoriaById/GetCategoriaByIdController";

export const categoriaRoutes = Router()

const createCategoriaController = new CreateCategoriaController
const getCategoriaByIdController = new GetCategoriaByIdController

categoriaRoutes.post('/create', (req, res, next) => {
    createCategoriaController.handle(req, res, next)
})

categoriaRoutes.get('/get/:id', (req, res, next) => {
    getCategoriaByIdController.handle(req, res, next)
})