import { Request, Response, NextFunction } from 'express'

export const routeNotFound = (req: Request, res: Response, next: NextFunction): any => {
  const error = new Error('Not found')
  logging.warning(error)

  return res.status(404).json({
    error: {
      message: error.message
    }
  })
}
