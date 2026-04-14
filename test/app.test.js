import { saludar, despedir, estadoSistema, sumar, restar, healtcheck } from "../src/app.js"

function ejecutarPruebas() {
    let pasadas = 0;
    let fallidas = 0;

    const r1 = saludar("Juan")
    if (r1.includes("Juan")) {
        console.log("Test 1 pasado: funcion saludar en CodeJuan es correcta")
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
        console.log("Test 2 Fallido:", actualEstado, "en Miguel");
        fallidas++;
    }
    
    // Test sumar mostrando resultado
    const a = 35;
    const b = 58;

    const sumarResultado = sumar(a, b);

    console.log("Resultado de sumar:", a, "+", b, "=", sumarResultado);

    if (sumarResultado === a + b) {
        console.log("Test 3 pasado: funcion sumar funciona correctamente");
        pasadas++;
    } else {
        console.log("Test 3 Fallido:", sumarResultado);
        fallidas++;
    }


    const c = 5;
    const d = 4;
    
    const restarResultado = restar(c, d);

    console.log("Resultado de restar:", c, "-", d, "=", restarResultado);
    if (restarResultado === c - d){
        console.log ("Test 4 pasado: funcion restar funcion correctamente");
        pasadas++;
    } else {
        console.log("Test 4 Fallido:", restarResultado);
        fallidas++;
    }

    console.log("\nResultados:", pasadas, "pasadas,", fallidas, "fallidas");

    if (fallidas > 0) process.exit(1);

}


ejecutarPruebas();
