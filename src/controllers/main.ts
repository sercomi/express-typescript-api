import { Request, Response } from 'express'
import { Controller } from '../decorators/controller'
import { Route } from '../decorators/route'

@Controller()
export class MainController {
  @Route('get', '/')
  getAll (_req: Request, res: Response): void {
    logging.log('getAll from Main Controller')

    res.status(200).json({
      message: 'getAll from Main Controller'
    })
  }
}
