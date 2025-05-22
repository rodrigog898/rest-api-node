// exisen mychos modulos pero con esto se da a entender que se pueden hacer aplicaciones desde estos modulos

const os = require("os");

console.log("Información del sistema operativo:");
console.log("_______________________________");

console.log("Nombre del sistema operativo:", os.platform());
console.log("Versión del sistema operativo:", os.release());
console.log("Arquitectura:", os.arch());
console.log("CPUs:", os.cpus());
console.log("Memoria libre:", os.freemem() / 1024 / 1024, "MB");
console.log("Memoria total:", os.totalmem() / 1024 / 1024, "MB");
console.log("Uptime:", os.uptime() / 60 / 60, "horas");
const os = require("os");
