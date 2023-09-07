import { Router } from "express"
import { usuarioRouter } from "./usuario.routes"
import { loginRouter } from "./login.routes"
import { ensureAuthLogin } from "../middlewares/ensureAuthLogin"
import { patrimonioRoutes } from "./patrimonio.routes"
import { localizacaoRoutes } from "./localizacao.routes"
import { categoriaRoutes } from "./categoria.routes"

export const router = Router()

router.use('/login', loginRouter)

router.use(ensureAuthLogin)
router.use('/usuario', usuarioRouter)
router.use('/patr', patrimonioRoutes)
router.use('/categoria', categoriaRoutes)
router.use('/localizacao', localizacaoRoutes)