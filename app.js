let {arrayParseado, mensaje1, mensaje2} = require("./funcionesDeTareas");

let comando = process.argv[2]?  process.argv[2].toLowerCase() : undefined;

switch(comando){
    case "listar":
        console.log("=====ESTE ES TU LISTADO DE TAREAS=====");
        arrayParseado.forEach((tarea, index) =>{
            console.log("Tarea " + index + ": " + tarea.titulo + " || " + "Estado: " + tarea.estado);
        })
        break;
    
    case undefined:
        console.log(mensaje1);
        break;

    default:
        console.log(mensaje2);
            
}




