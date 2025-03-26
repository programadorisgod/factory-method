import { type NextFunction, type Request, type Response } from "express"
type AsyncHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>

const AsyncHandler = (fn: AsyncHandler): AsyncHandler => {
  return (req: Request, res: Response, next: NextFunction): Promise<void> => {
    return Promise.resolve(fn(req, res, next)).catch((err) => next(err))
  }
}
