import type { INotification } from "../../interfaces/notification.js";
import { WhatsAppNotification } from "../../Products/notification/whatsapp-notification.js";
import { NotificationFactory } from "./notification-factory.js";

export class WhatsAppFactory extends NotificationFactory {
  public override createNotification(): INotification {
    return new WhatsAppNotification()
  }
}