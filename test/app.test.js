import { saludar, despedir, estadoSistema } from "../src/app.js"

function ejecutarPruebas() {
    let pasadas = 0;
    let fallidas = 0;

    const r1 = saludar("Miguel")
    if (r1.includes("Miguel")) {
        console.log("Test 1 pasado: funcion saludar en CodeMiguel es correcta")
        pasadas++;
    } else {
        console.log("Test 1 Fallido:", r1);
        fallidas++;
    }

    const actualEstado = estadoSistema();
    if (actualEstado.estado === "activo") {
        console.log("Test 2: Pasado: estadoSistema() funciona en Miguel");
        pasadas++;
    } else {
        console.log("Test 2 Fallido:", estado, "en Miguel");
        fallidas++;
    }
    console.log("\nResultados: " + pasadas + " pasadas,", + fallidas + "fallidas");
    if (fallidas > 0) process.exit(1);
}
ejecutarPruebas();