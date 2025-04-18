import { EmailNotificationBuilder } from "../../builders/email-notification-builder.js";
import type { INotificationBuilder } from "../../interfaces/notification-builder.js";
import { NotificationFactory } from "./notification-factory.js";

export class EmailFactory extends NotificationFactory {
  public override createNotificationBuilder(): INotificationBuilder {
    return new EmailNotificationBuilder()
  }
}