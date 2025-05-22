import express, { json } from 'express';
import { MoviesRouter } from './routes/movies.js'
import { corsmiddleware } from './middleware/cors.js';


const app = express();
 
app.use(json());
app.use(corsmiddleware());
app.disable('x-powered-by');



app.use('/movies', MoviesRouter);

const port = 1234; 
app.listen(port, () => {   
    console.log(`servidor escuchando en el puerto ${port}`)
})


