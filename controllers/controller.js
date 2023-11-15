import initModels from "../models/init-models.js"
import conexion from "../database/database.js"
import { request } from "express";
let tablas =initModels(conexion);

export function bienvenido(req,res)
{
res.status(200).json({msg:"bienvenido tipo pago"})
}

export async function consultarUsuario(req,res){
let resultado= await tablas.usuario.findAll();
    res.status(200).json(resultado)
}

export async function crearUsuario(req,res){
    let resultado= await tablas.usuario.create(req.body)
        res.status(200).json(resultado)
    }

    export async function eliminarUsuario(req,res){
        let resultado= await tablas.usuario.destroy({where:{usu_id_cliente:req.params.id}});
            res.status(200).json(resultado)
        }

        export async function actualizarUsuario(req,res){
            let varBody=req.body;
            //console.log("lo que tiene el body",varBody);
            let resultado= await tablas.usuario.update(varBody);
            //destroy({where:{usu_id_cliente:req.params.id}});
                res.status(200).json(resultado)
            }