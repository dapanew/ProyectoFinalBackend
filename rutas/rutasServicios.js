import { Router } from "express";
import {bienvenidoServicios,consultarServicios,crearServicios,eliminarServicios,actualizarServicios } from "../controllers/controllerServicio.js";
let routerServicio = Router();
routerServicio.get("/v1/Servicio", bienvenidoServicios)
routerServicio.get("/v1/consultarServicio",consultarServicios)
routerServicio.post("/v1/crearServicio",crearServicios)
routerServicio.delete("/v1/eliminarServicio/:id",eliminarServicios)
routerServicio.put("/v1/actualizarServicio",actualizarServicios)

export default routerServicio;