const express = require('express');
const app = express();
app.disable('x-powered-by');

const port = 1234;


// metodos de middleware
app.use(express.json());

app.use((req, res, next) => {
    if (req.method !== 'POST') return next();
    if (req.headers['content-type'] !== 'application/json') return next();
  
    // solo llegan request que son POST y que tienen el header Content-Type: application/json
    let body = '';
  
    // escuchar el evento data
    req.on('data', chunk => {
      body += chunk.toString();
    });
  
    req.on('end', () => {
      const data = JSON.parse(body);
      data.timestamp = Date.now();
  
      // mutar la request y meter la información en el req.body
      req.body = data;
      next();
    });//
  });
  
///////////////////////////////

app.get('/', (req, res) => {    
    res.json('Hola desde Express');

});


app.post('/pokemon', (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const data = JSON.parse(body)
        res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
        res.end(JSON.stringify(data))
    });
});

// Siempre tiene que estar en la ultima 
app.use((req, res) => { res.status(404).send('Error 404') }
)




app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})