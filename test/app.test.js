import {saludar, despedir, estadoSistema }﻿ from "../src/app.js"

function ejecutarPruebas(){
let pasadas = 0;
let fallidas = 0;

const r1 = saludar("Juan")
if (r1.includes("Juan")){
console.log("Test 1 pasado: funcion saludar en Juan es correcta")
pasadas++;
} else{
console.log("Test 1 faallido:", r1)
fallidas++;
}
const actualEstado = estadoSistema();
if (actualEstado.estado === "activo"){
console.log("Test 2: pasado: estadoSistema() funciona en Juan");
pasadas++;
}else {
console.log("Test 2 fallido: " + estado, "en Juan");
fallidas++;
}
console.log("\nResultados: " + pasadas + "pasadas,", + fallidas + "fallidas");
if (fallidas > 0) process.exit(1);
}
ejecutarPruebas()
