import { Request, Response, NextFunction } from 'express'

/**
 * A method decorator that wraps an async route handler to catch errors.
 * It replaces the need for try-catch blocks.
 */
export function AsyncHandler() {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value

    // Redefine the method with error handling
    descriptor.value = function (req: Request, res: Response, next: NextFunction) {
      // Ensure the original method is called with the correct `this` context
      Promise.resolve(originalMethod.apply(this, [req, res, next])).catch(next)
    }

    return descriptor
  }
}
