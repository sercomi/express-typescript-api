import dotenv from 'dotenv'
dotenv.config()

export const {
  DEVELOPMENT = process.env.NODE_ENV === 'development',
  TEST = process.env.NODE_ENV === 'test',
  HOSTNAME = process.env.HOSTNAME ?? 'localhost',
  PORT = 3000
} = process.env
