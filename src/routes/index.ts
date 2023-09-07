import { Router } from "express"
import { usuarioRouter } from "./usuario.routes"
import { loginRouter } from "./login.routes"
import { ensureAuthLogin } from "../middlewares/ensureAuthLogin"
import { patrimonioRoutes } from "./patrimonio.routes"

export const router = Router()

router.use('/login', loginRouter)

router.use(ensureAuthLogin)
router.use('/usuario', usuarioRouter)
router.use('/patr', patrimonioRoutes)