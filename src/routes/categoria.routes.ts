import { Router } from "express";
import { CreateCategoriaController } from "../modules/categoria/createCategoria/CreateCategoriaController";
import { GetCategoriaByIdController } from "../modules/categoria/getCategoriaById/GetCategoriaByIdController";
import { GetAllCategoriasController } from "../modules/categoria/getAllCategorias/GetAllCategoriasController";

export const categoriaRoutes = Router()

const createCategoriaController = new CreateCategoriaController
const getCategoriaByIdController = new GetCategoriaByIdController
const getAllCategoriasController = new GetAllCategoriasController

categoriaRoutes.post('/create', (req, res, next) => {
    createCategoriaController.handle(req, res, next)
})

categoriaRoutes.get('/get/:id', (req, res, next) => {
    getCategoriaByIdController.handle(req, res, next)
})

categoriaRoutes.get('/get-all', (req, res, next) => {
    getAllCategoriasController.handle(req, res, next)
})