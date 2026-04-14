import { saludar, despedir, estadoSistema, sumar, restar, healtcheck } from "../src/app.js"
import { saludar, despedir, estadoSistema, sumar, restar } from "../src/app.js"

function ejecutarPruebas() {
    let pasadas = 0;
    let fallidas = 0;

    console.log("Iniciando pruebas...");

    const r1 = saludar("Juan")
    if (r1.includes("Juan")) {
        console.log("Test 1 pasado: funcion saludar correcta")
        pasadas++;
    } else {
        console.log("Test 1 Fallido:", r1);
        fallidas++;
    }

    const actualEstado = estadoSistema();
    if (actualEstado.estado === "activo") {
        console.log("Test 2 pasado: estadoSistema correcto");
        pasadas++;
    } else {
        console.log("Test 2 Fallido:", actualEstado);
        fallidas++;
    }

    const a = 20;
    const b = 15;

    const sumarResultado = sumar(a,b);
    
     console.log ("restultado de sumar:", a, "+", b, "=",sumarResultado);

    if (sumarResultado === a + b){
        console.log("Test 3 pasado: sumar funciona");
        pasadas++;
    } else {
        console.log ("Test 3 Fallido:", sumarResultado);
        fallidas++;
    }

    const c = 10;
    const d = 5;

    const restarResultado = restar(c,d);

    console.log ("restultado de restar:", c, "-", d, "=",restarResultado);

    if (restarResultado === c - d) {
        console.log("Test 4 pasado: restar funciona");
        pasadas++;
    } else {
        console.log("Test 4 Fallido:", restarResultado);
        fallidas++;
    }

    console.log("\nResultados:", pasadas, "pasadas,", fallidas, "fallidas");

    if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();
