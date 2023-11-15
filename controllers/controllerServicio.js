import initModels from "../models/init-models.js"
import conexion from "../database/database.js"
import { request } from "express";
let tablas =initModels(conexion);

export function bienvenidoServicios(req,res)
{
res.status(200).json({msg:"bienvenido Servicios"})
}

export async function consultarServicios(req,res){
let resultado= await tablas.servicios.findAll();
    res.status(200).json(resultado)
}

export async function crearServicios(req,res){
    let resultado= await tablas.servicios.create(req.body)
        res.status(200).json(resultado)
    }

    export async function eliminarServicios(req,res){
        let resultado= await tablas.servicios.destroy({where:{ser_id_servicio:req.params.id}});
            res.status(200).json(resultado)
        }

        export async function actualizarServicios(req,res){
            let varBody=req.body;
            //console.log("lo que tiene el body",varBody);
            let resultado= await tablas.servicios.update(varBody);
            //destroy({where:{usu_id_cliente:req.params.id}});
                res.status(200).json(resultado)
            }