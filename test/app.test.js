import { saludar, despedir, estadoSistema, sumar, restar, factorial } from "../src/app.js";

function ejecutarPruebas() {
    let pasadas = 0;
    let fallidas = 0;

    console.log("Iniciando pruebas...\n");

    // TEST 1 - saludar
    const r1 = saludar("Juan");
    if (r1.includes("Juan")) {
        console.log("Test 1 pasado: saludar correcto");
        pasadas++;
    } else {
        console.log("Test 1 fallido:", r1);
        fallidas++;
    }

    // TEST 2 - estadoSistema
    const actualEstado = estadoSistema();
    if (actualEstado.estado === "activo") {
        console.log("Test 2 pasado: estadoSistema correcto");
        pasadas++;
    } else {
        console.log("Test 2 fallido:", actualEstado);
        fallidas++;
    }

    // TEST 3 - sumar
    const a = 20;
    const b = 15;

    const sumarResultado = sumar(a, b);

    console.log("Resultado sumar:", a, "+", b, "=", sumarResultado);

    if (sumarResultado === a + b) {
        console.log("Test 3 pasado: sumar funciona");
        pasadas++;
    } else {
        console.log("Test 3 fallido:", sumarResultado);
        fallidas++;
    }

    // TEST 4 - restar
    const c = 10;
    const d = 5;

    const restarResultado = restar(c, d);

    console.log("Resultado restar:", c, "-", d, "=", restarResultado);

    if (restarResultado === c - d) {
        console.log("Test 4 pasado: restar funciona");
        pasadas++;
    } else {
        console.log("Test 4 fallido:", restarResultado);
        fallidas++;
    }

    // 🧨 TEST 5 - factorial (DEBE FALLAR)
    const n = 5;
    const factorialResultado = factorial(n);

    console.log("Resultado factorial:", n, "! =", factorialResultado);

    if (factorialResultado === 120) {
        console.log("Test 5 pasado: factorial correcto");
        pasadas++;
    } else {
        console.log("Test 5 fallido (BUG DETECTADO):", factorialResultado);
        fallidas++;
    }

    // 📊 RESULTADOS
    console.log("\n======================");
    console.log("Resultados:", pasadas, "pasadas,", fallidas, "fallidas");
    console.log("======================\n");

    if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();
