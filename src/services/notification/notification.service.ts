import { EmailFactory } from "../../factories/notification/email-factory.js";
import type { NotificationFactory } from "../../factories/notification/notification-factory.js";
import { SMSFactory } from "../../factories/notification/sms-factory.js";
import { WhatsAppFactory } from "../../factories/notification/whatsapp-factory.js";
import type { notificationType } from "../../types/messageType.js";
import type { resultMessage } from "../../types/notificationType.js";

export class NotificationService {
  private notificationFactory!: NotificationFactory

  private readonly notifications: Map<notificationType,
  NotificationFactory> = 
    new Map([
      ["sms", new SMSFactory()],
      ["wpp", new WhatsAppFactory()],
      ["email", new EmailFactory()],
    ])

    public async sendNotification(type: notificationType): Promise<resultMessage> {
      this.configureFactory(type)
      
      const notification = this.notificationFactory.getNotification()

      return await notification.sendMessage("Frotadores de 💡 - Pago procesado con éxito.")

    }

    private configureFactory(type: notificationType): void {
      const factory = this.notifications.get(type)
      if(!factory){
        throw new Error("this method not allowed")
      }
      this.notificationFactory = factory
    }
}