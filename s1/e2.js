//npm i moment

//
/*
Para eliminar una librería
Paso 1. Eliminar la carpeta node_modules
Paso 2. Ejecutar
    npm i

Para instalar otra versión
Paso 1. Eliminar la carpeta node_modules
Paso 2. Modificar package.json la versión
Paso 3. ejecutar:
    npm i
*/
let os = require('os');
let misCpu = os.cpus();
console.log(misCpu);



let moment = require('moment');
let now = moment();
console.log(now);
