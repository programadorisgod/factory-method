import { WhatsAppNotificationBuilder } from "../../builders/whatsapp-notification-builder.js";
import type { INotificationBuilder } from "../../interfaces/notification-builder.js";
import { NotificationFactory } from "./notification-factory.js";

export class WhatsAppFactory extends NotificationFactory {
  public override createNotificationBuilder(): INotificationBuilder {
    return new WhatsAppNotificationBuilder()
  }
}