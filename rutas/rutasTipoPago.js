import { Router } from "express";
import {bienvenidoTipoPago,consultarTipoPago,crearTipoPago,eliminarTipoPago,actualizarTipoPago } from "../controllers/controllerTipoPago.js";
let routerTipoPago = Router();
routerTipoPago.get("/v1/tipoPago", bienvenidoTipoPago)
routerTipoPago.get("/v1/consultarTipoPago",consultarTipoPago)
routerTipoPago.post("/v1/crearTipoPago",crearTipoPago)
routerTipoPago.delete("/v1/eliminarTipoPago/:id",eliminarTipoPago)
routerTipoPago.put("/v1/actualizarTipoPago",actualizarTipoPago)

export default routerTipoPago;