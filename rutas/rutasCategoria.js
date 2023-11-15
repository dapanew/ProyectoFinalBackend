import { Router } from "express";
import {bienvenidoCategorias,consultarCategorias,crearCategorias,eliminarCategorias,actualizarCategorias } from "../controllers/controllerCategoria.js";
let routerCategoria = Router();
routerCategoria.get("/v1/Categoria", bienvenidoCategorias)
routerCategoria.get("/v1/consultarCategoria",consultarCategorias)
routerCategoria.post("/v1/crearCategoria",crearCategorias)
routerCategoria.delete("/v1/eliminarCategoria/:id",eliminarCategorias)
routerCategoria.put("/v1/actualizarCategoria",actualizarCategorias)

export default routerCategoria;