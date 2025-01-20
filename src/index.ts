import express from 'express'
import { PORT } from './config/config'
import './config/logging'
import { corsHandler } from './middlewares/corsHandler'
import { loggingHandler } from './middlewares/loggingHandler'
import { routeNotFound } from './middlewares/routeNotFound'

const app = express()
logging.log('----------------------------------------')
logging.log('Initializing API')
logging.log('----------------------------------------')
app.use(express.json())

logging.log('----------------------------------------')
logging.log('Logging & Configuration')
logging.log('----------------------------------------')
app.use(loggingHandler)
app.use(corsHandler())

logging.log('----------------------------------------')
logging.log('Define Controller Routing')
logging.log('----------------------------------------')
app.get('/', (_req, res) => {
  res.send('Hello World')
})

logging.log('----------------------------------------')
logging.log('Define Routing Error')
logging.log('----------------------------------------')
app.use(routeNotFound)

logging.log('----------------------------------------')
logging.log('Start listening')
logging.log('----------------------------------------')
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
