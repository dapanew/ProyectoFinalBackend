import initModels from "../models/init-models.js"
import conexion from "../database/database.js"
import { request } from "express";
let tablas =initModels(conexion);

export function bienvenidoCategorias(req,res)
{
res.status(200).json({msg:"bienvenido categorias"})
}

export async function consultarCategorias(req,res){
let resultado= await tablas.categorias_estable.findAll();
    res.status(200).json(resultado)
}

export async function crearCategorias(req,res){
    let resultado= await tablas.categorias_estable.create(req.body)
        res.status(200).json(resultado)
    }

    export async function eliminarCategorias(req,res){
        let resultado= await tablas.categorias_estable.destroy({where:{id_tipo_pago:req.params.id}});
            res.status(200).json(resultado)
        }

        export async function actualizarCategorias(req,res){
            let varBody=req.body;
            //console.log("lo que tiene el body",varBody);
            let resultado= await tablas.categorias_estable.update(varBody);
            //destroy({where:{usu_id_cliente:req.params.id}});
                res.status(200).json(resultado)
            }