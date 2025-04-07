import type { INotification } from "../../interfaces/notification.js";
export abstract class NotificationFactory{
  public getNotification(): INotification {
    const notification = this.createNotification()
    return notification
  }
  public abstract createNotification(): INotification
}