import { saludar, estadoSistema, sumar, restar, factorial } from "../src/app.js";

function ejecutarPruebas() {
    let pasadas = 0;
    let fallidas = 0;

    console.log("Iniciando pruebas...\n");

    const r1 = saludar("Juan");
    if (r1.includes("Juan")) pasadas++; else fallidas++;

    const estado = estadoSistema();
    if (estado.estado === "activo") pasadas++; else fallidas++;

    if (sumar(10, 5) === 15) pasadas++; else fallidas++;

    if (restar(10, 5) === 5) pasadas++; else fallidas++;

    const f = factorial(5);
    console.log("factorial:", f);

    if (f === 120) pasadas++; else fallidas++;

    console.log("\nResultados:", pasadas, "pasadas,", fallidas, "fallidas");

    if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();
