export function saludar (nombre){
return "Hello " + nombre + ", bienvenido a aplicación Juan"; 
}

export function despedir (nombre){
return "Hasta pronto, " + nombre + "!Juan";
}

export function estadoSistema(){
return{
estado: "activo",
version: "1.0.0",
message: "Sistema juan funcionando correctamente"
};
}