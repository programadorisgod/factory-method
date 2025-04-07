import type { INotification } from "../../interfaces/notification.js";
import { EmailNotification } from "../../Products/notification/email-notification.js";
import { NotificationFactory } from "./notification-factory.js";

export class EmailFactory extends NotificationFactory {
  public override createNotification(): INotification {
    return new EmailNotification()
  }
}