import express from 'express'
import http from 'http'
import { HOSTNAME, PORT } from './config/config'
import './config/logging'
import { corsHandler } from './middlewares/corsHandler'
import { loggingHandler } from './middlewares/loggingHandler'
import { routeNotFound } from './middlewares/routeNotFound'
import { defineRoutes } from './routes/routes'
import { MainController } from './controllers/main'

export const app = express()
export let httpServer: ReturnType<typeof http.createServer>

export const Main = (): void => {
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
  defineRoutes([MainController], app)

  logging.log('----------------------------------------')
  logging.log('Define Routing Error')
  logging.log('----------------------------------------')
  app.use(routeNotFound)

  logging.log('----------------------------------------')
  logging.log('Start server')
  logging.log('----------------------------------------')

  httpServer = app.listen(PORT, () => {
    logging.log('----------------------------------------')
    logging.log(`Server is running on port ${HOSTNAME}:${PORT}`)
    logging.log('----------------------------------------')
  })
}

export const Shutdown = (callback: () => void): ReturnType<typeof httpServer.close> => httpServer?.close(callback)

Main()
