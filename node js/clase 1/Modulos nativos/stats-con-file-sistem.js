const fs = require('node:fs')

const stats = fs.statSync('./index.js')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size

)