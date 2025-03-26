import { PaymentProcessorController } from "../controllers/payementProcessor.js"
import { createPaymentProcessorRouter } from "../routes/route.js"
import { PaymentService } from "../services/payment.service.js"
import { LoggerService } from "../utils/Logger/loger.js"

export function getControllers() {
  const logger = new LoggerService()

  const paymentService = new PaymentService()
  
  const paymentProcessorController = new PaymentProcessorController(
    paymentService
  )
  const paymentProcessorRouter = createPaymentProcessorRouter({
    controller: paymentProcessorController,
  })

  return {
    logger,
    paymentProcessorRouter,
  }
}
