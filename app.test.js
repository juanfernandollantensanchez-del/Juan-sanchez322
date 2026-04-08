import { saludar, estadoSistema, sumar, restar } from "../src/app.js";

function ejecutarPruebas() {
    let pasadas = 0;
    let fallidas = 0;

    // Test 1: saludar
    const r1 = saludar("Juan");
    if (r1.includes("Juan")) {
        console.log("Test 1 pasado: funcion saludar en Juan es correcta");
        pasadas++;
    } else {
        console.log("Test 1 fallido:", r1);
        fallidas++;
    }

    // Test 2: estadoSistema
    const estado = estadoSistema();
    if (estado.estado === "activo") {
        console.log("Test 2 pasado: estadoSistema() funciona en Juan");
        pasadas++;
    } else {
        console.log("Test 2 fallido:", estado);
        fallidas++;
    }

    // Test 3: sumar
    const a = 2;
    const b = 3;
    const suma = sumar(a, b);
    if (suma === 5) {
        console.log("Test 3 pasado: sumar(2,3) devuelve 5");
        pasadas++;
    } else {
        console.log("Test 3 fallido: sumar(2,3) devuelve", suma);
        fallidas++;
    }

    // Test 4: restar
    const x = 5;
    const y = 3;
    const resta = restar(x, y);
    if (resta === 2) {
        console.log("Test 4 pasado: restar(5,3) devuelve 2");
        pasadas++;
    } else {
        console.log("Test 4 fallido: restar(5,3) devuelve", resta);
        fallidas++;
    }

    // Resultados finales
    console.log(`\nResultados: ${pasadas} pasadas, ${fallidas} fallidas`);

    if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();
