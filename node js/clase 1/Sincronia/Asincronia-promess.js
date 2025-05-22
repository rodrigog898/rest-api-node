// Esto solo en los modulos nativos 
// que not tienen promesas


//const {promisify} = require('node:util')
//const readFilePromise = promisify(fs.readFile)



const fs = require('node:fs/promises');


// Este seria el metodo para hacerlo de manera Asincrona
console.log('Ejecutando primer archivo..')
fs.readFile('../notas.md','utf-8')
    .then(text => {
        console.log('Primer Texto: ', text);
    })



console.log('ejecucion random')

console.log('Ejecutando segundo archivo...')
fs.readFile('../notas.md', 'utf-8')
    .then(text => {
        console.log('SEGUNDO Texto: ', text);
    })