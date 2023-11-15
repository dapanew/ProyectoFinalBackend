import { Router } from "express";
import {bienvenidoEstablecimiento,consultarEstablecimiento,crearEstablecimiento,eliminarEstablecimiento,actualizarEstablecimiento } from "../controllers/controllerEstablecimiento.js";
let routerEstablecimiento = Router();
//routerEstablecimiento.get("/v1/Establecimiento", bienvenidoEstablecimiento)
routerEstablecimiento.get("/v1/consultarEstablecimiento",consultarEstablecimiento)
routerEstablecimiento.post("/v1/crearEstablecimiento",crearEstablecimiento)
routerEstablecimiento.delete("/v1/eliminarEstablecimiento/:id",eliminarEstablecimiento)
routerEstablecimiento.put("/v1/actualizarEstablecimiento",actualizarEstablecimiento)

export default routerEstablecimiento;