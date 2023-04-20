// O require serve para importar módulos. No caso, foi importado o módulo "path" e depois
// usado ele para mostrar o nome base do __filename atual

// Módulo nativo para trabalhar com paths
const path = require("path");
console.log(path.basename(__filename));

// Módulo criado por mim que está localizado na pasta raíz
const myModule = require("./exports");
console.log(myModule);
