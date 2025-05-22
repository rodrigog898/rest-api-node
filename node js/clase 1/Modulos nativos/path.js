const path = require('node:path')

//  a que lado esta la barra segun os 
console.log(path.sep)

const base = path.basename ('/content/awp/asd.txt')
console.log(base)

const exten = path.extname ('/content/awp/asd.txt')
console.log(exten)