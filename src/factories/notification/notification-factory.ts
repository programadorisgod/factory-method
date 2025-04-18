import type { INotificationBuilder } from "../../interfaces/notification-builder.js";

export abstract class NotificationFactory{
  public getNotification(): INotificationBuilder {
    const notification = this.createNotificationBuilder()
    return notification
  }
  public abstract createNotificationBuilder(): INotificationBuilder
}