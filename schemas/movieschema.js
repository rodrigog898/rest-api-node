const z = require('zod')

    const schema = z.object({
        title: z.string({
            required_error: 'El campo title es requerido',
        }),
        year: z.number().int().min(1900).max(9999).optional(),
        director: z.string(),
        duration: z.number().int().positive(),
        poster: z.string().url({
            message: 'El formato de la url no es correcto',
        }),
        genre: z.array(z.enum(['action', 'comedy', 'drama', 'fantasy', 'horror', 'romance', 'sci-fi'])),
        rate: z.number().min(0).max(10)
    })

function validatepartialMovie(object) {
    return schema.partial().safeParse(object)
}

function validateMovie(object) {
    return schema.safeParse(object)
}

module.exports = {
    validateMovie,
    validatepartialMovie
}