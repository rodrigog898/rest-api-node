const http = require('node:http');
const ditto = require('./ditto.json');
const { parse } = require('node:path');

const requestListener = (req, res) => {
    const {method ,url} = req

    switch (method) {
        case 'GET':
            switch (url) {
                case '/pokemon/ditto':
                    res.setHeader('Content-Type', 'application/json; charset=utf-8')
                    return res.end(JSON.stringify(ditto))
                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    res.end('Error 404')}
            break;
        case 'POST':
            switch (url) {
                case '/pokemon': {
                   let body = ''

                    req.on('data', chunk => {
                            body += chunk.toString()
                    })

                    req.on('end', () => { 
                        const data = JSON.parse(body)
                        res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
                        res.end(JSON.stringify(data))
                    })

                    break;
                }
                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    res.end('Error 404')
            }
            

    }
    
    


}




const server = http.createServer(requestListener) 

server.listen(1234, () => {
    console.log(`servidor escuchando en el puerto 1234`)
  })