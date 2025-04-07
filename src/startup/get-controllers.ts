import { NotificationController } from "../controllers/notification/notification.js"
import { PaymentProcessorController } from "../controllers/paymentProcess/payementProcessor.js"
import { createNotificationRouter } from "../routes/notification/route.js"
import { createPaymentProcessorRouter } from "../routes/paymentProcess/route.js"
import { NotificationService } from "../services/notification/notification.service.js"
import { PaymentService } from "../services/paymentProcess/payment.service.js"
import { LoggerService } from "../utils/Logger/loger.js"

export function getControllers() {
  const logger = new LoggerService()

  const paymentService = new PaymentService()
  const notificationService = new NotificationService()
  
  const paymentProcessorController = new PaymentProcessorController(
    paymentService
  )
  const notificationController = new NotificationController(
    notificationService
  )

  const paymentProcessorRouter = createPaymentProcessorRouter({
    controller: paymentProcessorController,
  })
  const notificationRouter = createNotificationRouter({
    controller: notificationController
  })

  return {
    logger,
    paymentProcessorRouter,
    notificationRouter
  }
}
