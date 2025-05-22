// Epxplicacion Async Await 

//🚀 Async / Await (Cena sin estrés):
//Ahora imagina que tienes un asistente que se encarga de hacer todas esas compras por ti. Tú solo le dices: "Ve a comprar esto, y me avisas cuando lo tengas."
//No tienes que estar pendiente, puedes hacer otras cosas mientras él va y vuelve. Cuando termina, te entrega todo junto.

//🤔 ¿Qué está pasando?
//Le dices a la función que es async (asíncrona), es decir, que puede hacer varias cosas al mismo tiempo sin bloquear el programa.
//Con await, le pides que espere a que esa tarea se termine antes de seguir, pero mientras tanto, el programa sigue funcionando (no se congela).
//Si todo sale bien, recibes el ingrediente y sigues. Si hay un problema, se va directo al error.

// Asincrono Secuencial 


const {readFile} = require('node:fs/promises')

// Para ocupar Async Away commonjs no lo soporta a diferencia de Esmodule (mjs)
// por eso se ocupa la IIFE para que sea funcional en CommonJS

// Esto Seria una funcion IIFE (Expresión de función ejecutada inmediatamente)
;(
    async () => {
    console.log('Ejecutando primer archivo..')
    const text = await readFile('../notas.md','utf-8')
    console.log ('primer texto', text)
    console.log('ejecucion random')
    
    console.log('Ejecutando segundo archivo...')
    const text2 = await readFile('../notas.md', 'utf-8')
    console.log('Segundo Texto ', text2)
}
)()



