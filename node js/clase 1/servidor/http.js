const http = require('node:http')
const findAvailablePort = require('./appservidor/app.js')




const server = http.createServer((req, res) =>{
    console.log('request received')
    res.end('hola mundo')

})

findAvailablePort(3000).then(port =>{
    server.listen(port, () => {
        console.log(`server lister on port http://localhost:${port}`)
    })
})