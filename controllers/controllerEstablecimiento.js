import initModels from "../models/init-models.js"
import conexion from "../database/database.js"
import { request } from "express";
let tablas =initModels(conexion);

export function bienvenidoEstablecimiento(req,res)
{
res.status(200).json({msg:"bienvenido Establecimiento"})
}

export async function consultarEstablecimiento(req,res){
let resultado= await tablas.establecimiento.findAll();
    res.status(200).json(resultado)
}

export async function crearEstablecimiento(req,res){
    let resultado= await tablas.establecimiento.create(req.body)
        res.status(200).json(resultado)
    }

    export async function eliminarEstablecimiento(req,res){
        let resultado= await tablas.establecimiento.destroy({where:{est_id_establecmnto:req.params.id}});
            res.status(200).json(resultado)
        }

        export async function actualizarEstablecimiento(req,res){
            let varBody=req.body;
            //console.log("lo que tiene el body",varBody);
            let resultado= await tablas.establecimiento.update(varBody);
            //destroy({where:{usu_id_cliente:req.params.id}});
                res.status(200).json(resultado)
            }