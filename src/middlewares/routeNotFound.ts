import { Request, Response, NextFunction } from 'express'

export const routeNotFound = (req: Request, res: Response, next: NextFunction): any => {
  logging.warn('Not found: ' + req.url)

  return res.status(404).json({
    error: 'Not found'
  })
}
