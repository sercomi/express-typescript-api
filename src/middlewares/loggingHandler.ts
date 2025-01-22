import { Request, Response, NextFunction } from 'express'

export const loggingHandler = (req: Request, res: Response, next: NextFunction): void => {
  // logging.log(`Incoming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress ?? 'unknown'}]`)

  res.on('finish', () => {
    // logging.log(`Outgoing - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress ?? 'unknown'}] - STATUS: [${res.statusCode}]`)
  })

  next()
}
