const VERSION = '1.2.0';

function saludar(nombre) {
    return `Hola ${nombre}, bienvenido a Juan`;
}

function healthCheck() {
    return {
        status: 'ok',
        version: VERSION,
        timestamp: new Date().toISOString(),
        message: 'Sistema Juan funcionando correctamente'
    };
}

function verificarSistema() {
    const resultado = healthCheck();
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = `${resultado.message} | ${resultado.timestamp}`;
    statusDiv.style.color = '#0094BC';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('version').textContent = `v${VERSION}`;
    verificarSistema();
});