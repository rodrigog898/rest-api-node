import movie from '../movies.json' with { type: 'json' };
import { randomUUID } from 'node:crypto'



export class MovieModels {
    static async getAll({ genre }) {
        if (genre) {
            return  movie.filter(
                movie => movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
            )
            
        }
        return movie
    }

    static async getById({ id }) {
        const found = movie.find((m) => m.id === id);
        return found ?? null;
    }
    
    

    static async create({newMovie}) {
        const newMovieId = {
            id: randomUUID(),
            ...newMovie
        }
        movie.push(newMovieId)
        return newMovieId
    }
    

    static async delete({id}) {
        const movieIndex = movie.findIndex((movie) => movie.id === id)
        if (movieIndex === -1) {
            return null
        }
        movie.splice(movieIndex, 1)
        return true
    }
    static async update({id, updatedMovie}) {
        const movieIndex = movie.findIndex((movie) => movie.id === id)
        if (movieIndex === -1) {
            return null
        }
        const updatedMovieId = {
            ...movie[movieIndex],
            ...updatedMovie
        }
        movie[movieIndex] = updatedMovieId
        return updatedMovieId
    }
}