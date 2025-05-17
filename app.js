const express = require('express');
const movie = require('./movies.json')
const crypto = require('crypto')
const cors = require('cors')
const validateMovie = require('./schemas/movieschema');
const app = express();
app.disable('x-powered-by');
app.use(cors({
    origin: (origin, callback) => {
        const aceptedorigin = [
            'http://localhost:5500',
            'http://127.0.0.1:5500/'
        ]

        if (aceptedorigin.includes(origin)) {
            callback(null, true)
        }

        if (!origin) {  
            return callback(null, true)
        }
        return callback(new Error('CORS error'))
    }
}))







const port = process.env.PORT ?? 1234;  
app.use(express.json());

app.get('/', (req, res) => {
    console.log('Hola desde Express');
})




app.get('/movies', (req, res) => {

   
    const {genre} = req.query
    if (genre) {
        const moviesfilter = movie.filter(
            movie => movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
        )
        return res.json(moviesfilter)
    }
    res.json(movie)
    

})

app.delete('/movies/:id', (req, res) => {

    const {id} = req.params
    const movieIndex = movie.findIndex((movie) => movie.id === id)
    if (movieIndex === -1) {
        return res.status(404).send('Error 404')
    }
    movie.splice(movieIndex, 1)
    return res.json({message: 'Movie deleted successfully'})
})



app.post('/movies', (req, res) => {

    const result = validateMovie(req.body)

    if (result.error) {
        return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const newmovie = {
        id: crypto.randomUUID(),
        ...result.data
    }
    movie.push(newmovie)
    res.status(201).json(newmovie)


})

app.patch('/movies/:id', (req, res) => {
    const result = validateMovie.validatepartialMovie(req.body)
    if (result.error) {
        return res.status(400).json({ error: JSON.parse(result.error.message) });
    }
    const {id} = req.params
    const movieIndex = movie.findIndex((movie) => movie.id === id)
    if (movieIndex === -1) {
        return res.status(404).send('Error 404')
    }
    const updatedMovie = {
        ...movie[movieIndex],
        ...result.data
    }

    return res.json(updatedMovie)

})

app.get('/movies/:id', (req, res) => {
    const {id} = req.params
    const movieId = movie.find((movie) => movie.id === id)
    if (!movieId) return res.status(404).send('Error 404')
    res.json(movieId)
})




app.listen(port, () => {   
    console.log(`servidor escuchando en el puerto ${port}`)
})