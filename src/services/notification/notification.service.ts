import { EmailFactory } from "../../factories/notification/email-factory.js";
import { PushFactory } from "../../factories/notification/push-factory.js";
import { SMSFactory } from "../../factories/notification/sms-factory.js";
import { WhatsAppFactory } from "../../factories/notification/whatsapp-factory.js";
import type { INotificationBuilder } from "../../interfaces/notification-builder.js";
import type { notificationType } from "../../types/messageType.js";
import type { resultMessage } from "../../types/notificationType.js";

export class NotificationService {

  private readonly factories: Map<notificationType, () => INotificationBuilder> = new Map([
    ["email", () => new EmailFactory().createNotificationBuilder()],
    ["sms", () => new SMSFactory().createNotificationBuilder()],
    ["wpp", () => new WhatsAppFactory().createNotificationBuilder()],
    ["push", () => new PushFactory().createNotificationBuilder()]
  ]);

    public async sendNotification(type: notificationType, data: any): Promise<resultMessage> {
      const getBuilder = this.factories.get(type)
      if (!getBuilder) throw new Error("Unsupported notification type");

      const builder = getBuilder();
      const notification = builder.configure(data).build();
      return await notification.sendMessage()
    }

}