import { Router, type NextFunction, type Request, type Response } from "express"
import type { NotificationController } from "../../controllers/notification/notification.js"
import { Constants } from "../../constant/constants.js"
import { AsyncHandler } from "../../utils/Handle/handle-async.js"

const router = Router()

type Controller = { controller: NotificationController }

export const createNotificationRouter = ({ controller }: Controller) => {
  router.post(
    `${Constants.BASE_URL}/send-notification/:type`,
    AsyncHandler((req: Request, res: Response, next: NextFunction) => {
      return controller.notifications(req, res, next)
    })
  )

  return router
} 