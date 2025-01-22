import { Express, Router } from 'express'

export const router = Router()

export function defineRoutes (controllers: any, app: Express): void {
  for (let i = 0; i < controllers.length; i++) {
    const controller = new controllers[i]()
    const controllerPath = Reflect.get(controllers[i], 'baseRoute') as string
    const functions = Object.getOwnPropertyNames(Object.getPrototypeOf(controller))

    for (let j = 0; j < functions.length; j++) {
      const key = functions[j]
      const routeHandlers = Reflect.get(controller[key], 'routeHandlers')
      if (routeHandlers === undefined) {
        continue
      }

      const methods = Array.from(routeHandlers.keys())
      for (let k = 0; k < methods.length; k++) {
        const method = methods[k]
        const routes = routeHandlers.get(method as keyof Express)
        if (routes != null) {
          const routeNames = Array.from(routes.keys())
          for (let l = 0; l < routeNames.length; l++) {
            const handlers = routes.get(routeNames[l])
            if (handlers !== undefined) {
              app[method as keyof Express](`${controllerPath}${routeNames[l] as string}`, handlers)
              logging.info('Loading route:', method, `${controllerPath}${routeNames[l] as string}`)
            }
          }
        }
      }
    }
  }
}
