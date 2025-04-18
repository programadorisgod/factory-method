import { SMSNotificationBuilder } from "../../builders/sms-notification-builder.js";
import type { INotificationBuilder } from "../../interfaces/notification-builder.js";
import { NotificationFactory } from "./notification-factory.js";

export class SMSFactory extends NotificationFactory {
  public override createNotificationBuilder(): INotificationBuilder {
    return new SMSNotificationBuilder()
  }
}