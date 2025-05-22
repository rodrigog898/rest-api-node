import cors from 'cors'

const ACEPTEDORIGIN = [
    'http://localhost:5500',
    'http://127.0.0.1:5500/'
]

export const corsmiddleware = (aceptedorigin = ACEPTEDORIGIN) => cors({
    origin: (origin, callback) => {

        if (aceptedorigin.includes(origin)) {
            callback(null, true)
        }

        if (!origin) {  
            return callback(null, true)
        }
        return callback(new Error('CORS error'))
    }
})