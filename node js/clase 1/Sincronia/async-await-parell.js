import { readFile } from 'node:fs/promises';

// metodo para hacer llamadas en paralelo es la forma mas rapida 


Promise.all([
    readFile('../notas.md','utf-8'),
    readFile('../notas.md','utf-8')

]).then(([text, secondtext]) => {
    console.log('primer texto', text)
    console.log('segundo texto', secondtext)
})