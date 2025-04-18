import type { INotification } from "./notification.js"

export interface INotificationBuilder {
  configure(data: any): this;
  build(): INotification
}