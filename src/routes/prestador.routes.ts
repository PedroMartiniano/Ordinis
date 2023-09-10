import { Router } from "express";
import { CreatePrestadorController } from "../modules/prestador/createPrestador/CreatePrestadorController";
import { GetPrestadorByIdController } from "../modules/prestador/getPrestadorById/GetPrestadorByIdController";
import { GetAllPrestadoresController } from "../modules/prestador/getAllPrestadores/GetAllPrestadoresController";

export const prestadorRoutes = Router()

const createPrestadorController = new CreatePrestadorController
const getPrestadorByIdController = new GetPrestadorByIdController
const getAllPrestadoresController = new GetAllPrestadoresController

prestadorRoutes.post('/create', (req, res, next) => {
    createPrestadorController.handle(req, res, next)
})

prestadorRoutes.get('/get/:id', (req, res, next) => {
    getPrestadorByIdController.handle(req, res, next)
})

prestadorRoutes.get('/get-all', (req, res, next) => {
    getAllPrestadoresController.handle(req, res, next)
})