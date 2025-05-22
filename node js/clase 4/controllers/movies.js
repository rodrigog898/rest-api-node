

import { MovieModels } from '../models/movie.js'
// import { MovieModel } from '../models/database/movie.js'
import { validateMovie, validatePartialMovie } from '../schemas/movieschema.js'

export class MovieControllers  {
    static async getAll (req, res)  { 
        const {genre} = req.query
        const movie =  await MovieModels.getAll({genre})
        res.json(movie)
    }

    static async getById (req, res) {
        const { id } = req.params
        const movie = await MovieModels.getById({ id })
        if (movie) return res.json(movie)
        res.status(404).json({ message: 'Movie not found' })
      }
    static async postby (req, res)  {
        const result = validateMovie(req.body)
    
        if (result.error) {
            return res.status(400).json({ error: JSON.parse(result.error.message) });
        }
    
        const newMovie = await MovieModels.create({newMovie: result.data})
        res.status(201).json(newMovie)
    }

    static async delete (req, res)  {
        const {id} = req.params
        const result = await MovieModels.delete({id})
        if (!result) {
            return res.status(404).send('Error 404')
        }
        return res.json({message: 'Movie deleted successfully'})
    }

    static async update (req, res)  {
        const result = validatePartialMovie(req.body)
        if (result.error) {
            return res.status(400).json({ error: JSON.parse(result.error.message) });
        }
        const {id} = req.params
        const updatedMovie = await MovieModels.update({id, updatedMovie: result.data})
        if (!updatedMovie) {
            return res.status(404).send('Error 404')
        }
        return res.json(updatedMovie)
}}