export function Controller (baseRoute: string = '') {
  return (target: Function) => {
    Reflect.set(target, 'baseRoute', baseRoute)
  }
}
