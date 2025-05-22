const http = require('node:http')

const desiredPort = 3000


const processrequest = (req, res) => {
    if (req.url === '/'){
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain ; charset=utf-8')
      res.end('hola holddsadsaa hola')
    }
    else if (req.url === '/about'){
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html ; charset=utf-8')
      res.end('<h1>hola about<h1>')}
    else {
      res.statusCode = 404
      res.setHeader('Content-Type', 'text/plain ; charset=utf-8')
      res.end('Error 404')
    }
}

const server = http.createServer(processrequest)

server.listen(desiredPort, () => {
  console.log(`Servidor escuchando en el puerto ${desiredPort}`)
})