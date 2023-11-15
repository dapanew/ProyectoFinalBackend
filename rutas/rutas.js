import { Router } from "express";
import { consultarUsuario,crearUsuario,eliminarUsuario,actualizarUsuario } from "../controllers/controller.js";
let router = Router();
//router.get("/", bienvenido)
router.get("/v1/consultarUsuario",consultarUsuario)
router.post("/v1/crearUsuario",crearUsuario)
router.delete("/v1/eliminarUsuario/:id",eliminarUsuario)
router.put("/v1/actualizarUsuario",actualizarUsuario)

export default router;