let fs = require("fs");

let tareasJSON = fs.readFileSync("./tareas.json", "utf-8");

let arrayParseado = JSON.parse(tareasJSON);

let mensaje1 = "Atencion - Tienes que pasar una accion";

let mensaje2 = "No entiendo que quieres hacer";


module.exports = {
    arrayParseado,
    mensaje1,
    mensaje2
};