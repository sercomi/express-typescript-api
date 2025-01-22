import { Express, RequestHandler } from 'express'

export type RouteHandler = Map<keyof Express, Map<string, RequestHandler[]>>

export function Route (method: keyof Express, path: string = '', ...middleware: RequestHandler[]) {
  return (target: any) => {
    const routeHandlers: RouteHandler = Reflect.get(target, 'routeHandlers') ?? new Map()

    if (!routeHandlers.has(method)) {
      routeHandlers.set(method, new Map())
    }

    routeHandlers.get(method)?.set(path, [...middleware, target])
    Reflect.set(target, 'routeHandlers', routeHandlers)
  }
}
