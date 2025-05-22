// Asincrono Callback



const fs = require('node:fs');

// Este seria el metodo para hacerlo de manera Asincrona
console.log('Ejecutando primer archivo..')
fs.readFile('../notas.md','utf-8', (err, text) => {  // --> Asincrono con callbacks  

    console.log('Primer Texto: ', text);
});

console.log('ejecucion random')

console.log('Ejecutando segundo archivo...')
fs.readFile('../notas.md', 'utf-8', (err, text) => {
    console.log('Segundo Texto: ',text);
});