import { Router, type NextFunction, type Request, type Response } from "express"
import { Constants } from "../../constant/constants.js"
import { AsyncHandler } from "../../utils/Handle/handle-async.js"
import type { PaymentProcessorController } from "../../controllers/paymentProcess/payementProcessor.js"

const router = Router()

type Controller = { controller: PaymentProcessorController }

export const createPaymentProcessorRouter = ({ controller }: Controller) => {
  router.put(
    `${Constants.BASE_URL}/payment-processor`,
    AsyncHandler((req: Request, res: Response, next: NextFunction) => {
      return controller.processPayment(req, res, next)
    })
  )

  return router
}
