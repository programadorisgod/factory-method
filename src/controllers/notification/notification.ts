import type { NextFunction, Request, Response } from "express"
import type { NotificationService } from "../../services/notification/notification.service.js"
import type { notificationType } from "../../types/messageType.js"

type notificationParams = {
  type: notificationType
}

export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  public async notifications(
    req: Request,
    res: Response,
    _next: NextFunction
  ): Promise<void> {
    const { type } = req.params as notificationParams

    const notificationSent = await this.notificationService.sendNotification(
      type
    )

    res.status(200).json(notificationSent)
  }
}
