import initModels from "../models/init-models.js"
import conexion from "../database/database.js"
import { request } from "express";
let tablas =initModels(conexion);

export function bienvenidoTipoPago(req,res)
{
res.status(200).json({msg:"bienvenido tipo pago"})
}

export async function consultarTipoPago(req,res){
let resultado= await tablas.tipo_pago.findAll();
    res.status(200).json(resultado)
}

export async function crearTipoPago(req,res){
    let resultado= await tablas.tipo_pago.create(req.body)
        res.status(200).json(resultado)
    }

    export async function eliminarTipoPago(req,res){
        let resultado= await tablas.tipo_pago.destroy({where:{id_tipo_pago:req.params.id}});
            res.status(200).json(resultado)
        }

        export async function actualizarTipoPago(req,res){
            let varBody=req.body;
            //console.log("lo que tiene el body",varBody);
            let resultado= await tablas.usuario.update(varBody);
            //destroy({where:{usu_id_cliente:req.params.id}});
                res.status(200).json(resultado)
            }