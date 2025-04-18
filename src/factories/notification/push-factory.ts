import { PushNotificationBuilder } from "../../builders/push-notification-builder.js";
import type { INotificationBuilder } from "../../interfaces/notification-builder.js";
import { NotificationFactory } from "./notification-factory.js";

export class PushFactory extends NotificationFactory{
  public override createNotificationBuilder(): INotificationBuilder {
      return new PushNotificationBuilder()
  }
}