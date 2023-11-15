import {Sequelize} from "sequelize";

const conexion = new Sequelize(
    'geminisDB',
    'postgres',
    'admin',
    {
       host: 'localhost',
       dialect:'postgres' 
    }
);
export default conexion;