const fs = require('node:fs');



// Este metodo seria de manera syncrona es decir que va en cadena si quieriera meter mas logica dentro 
// no se podia ya que va secuencial , deventaja no puedo hacer otras cosas si no que tengo que terminar que termine

console.log('leyendo primer archivo........')

const archivo1  = fs.readFileSync('../notas.md', 'utf-8')

console.log(archivo1)

console.log('leyendo segundo archivo.....')

const archivo2  = fs.readFileSync('../notas.md', 'utf-8')

console.log(archivo2)


