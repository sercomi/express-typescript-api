import { RequestHandler } from 'express'
import cors from 'cors'
import { PORT } from '../config/config'

const ACCEPTED_ORIGINS = [
  `http://localhost:${PORT}`
]

export const corsHandler = ({ acceptedOrigin = ACCEPTED_ORIGINS } = {}): RequestHandler => cors({
  origin: (origin, callback) => {
    if (typeof origin !== 'string' || acceptedOrigin.includes(origin)) {
      return callback(null, true)
    } else {
      return callback(new Error('Not allowed by CORS'))
    }
  }
})
