import express from 'express'
import { PORT } from './config'
import { corsMiddleware } from './middlewares/cors'

const app = express()
app.use(corsMiddleware())
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
