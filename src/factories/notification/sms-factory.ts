import type { INotification } from "../../interfaces/notification.js";
import { SMSNotification } from "../../Products/notification/sms-notification.js";
import { NotificationFactory } from "./notification-factory.js";

export class SMSFactory extends NotificationFactory {
  public override createNotification(): INotification {
    return new SMSNotification()
  }
}