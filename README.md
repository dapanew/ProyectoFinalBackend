# ProyectoFinalBackend
proyecto final del curso 

----------------------DOCUMENTACION BACKEND-END------------------------------
estructura del proyecto comandos ejecutados 
1.	npm init -y					             -> comando para iniciar  proyecto con node  con ese comando se crea el package.json
2.	npm install express --save               -> isntalacion de express
3.	npm install nodemon -D 		             -> 	nodemon se utiliza para compilar el proyecto en automatico
4.	npm run dev                              -> con este comando se compila dev para validar errores en el codigo en linea 
5.	npm install pg                           -> conexion a la bd 
6.	npm install sequelize sequelize-auto     -> permite hacer consultas a la base de datos 	
7.  npx sequelize-auto -h localhost  -d geminisDB  -u postgres -x admin  -p 5432 -s public  --dialect postgres -o ./models -l esm
este comando de ejecuta para traer el mapeo de las tablas  de la bd como un objeto
----------------------------------------------------
