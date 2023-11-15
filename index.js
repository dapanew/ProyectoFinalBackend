import express from 'express';
//import router from './rutas/rutas.js';
import conexion from './database/database.js';
import  cors from 'cors';
import router from './rutas/rutas.js';
import routerTipoPago from './rutas/rutasTipoPago.js'
import routerCategoria from './rutas/rutasCategoria.js';
import routerEstablecimiento from './rutas/rutasEstablecimiento.js';
import routerServicio from './rutas/rutasServicios.js';
async function inicioServidor() {
    const app = express();//crea el objeto app de express
    try{
    await conexion.sync({ force: false })
} catch (e) {
  console.error("error al sincronizar",e);  
return;
}
    app.use(cors);
    app.use(express.json());//habilita el uso de JSON
    app.use(express.urlencoded({ extended: false }));
    app.use(router);
    app.use(routerTipoPago);
    app.use(routerCategoria);
    app.use(routerEstablecimiento);
    app.use(routerServicio);
    app.listen(3000);//pone el servidor a escuchar en el puerto 3000
    console.log("arriba el servidor");
}
inicioServidor();