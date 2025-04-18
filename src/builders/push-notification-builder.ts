import type { INotificationBuilder } from "../interfaces/notification-builder.js";
import type { INotification } from "../interfaces/notification.js";
import { PushNotification } from "../Products/notification/push-notification.js";

export class PushNotificationBuilder implements INotificationBuilder{

  private deviceToken: string = ''
  private title:  string = ''
  private message: string = ''
  private imagenUrl: string = ''
  private clickAction: string = ''
  private priority: 'high' | 'normal' = 'normal'

  setDeviceToken(deviceToken: string) { this.deviceToken = deviceToken ; return this }
  setTitle(title: string) { this.title = title ; return this }
  setMessage(message: string) { this.message = message ; return this}
  setImagenUrl(imagenUrl: string) { this.imagenUrl = imagenUrl; return this
  }
  setClickAction(clickAction: string){ this.clickAction = clickAction; return this }
  setPriority(priority: 'high' | 'normal') { this.priority = priority; return this }

  configure(data: any): this {
    this.setDeviceToken(data.deviceToken)
    this.setTitle(data.title)
    this.setMessage(data.message)
    this.setImagenUrl(data.imagenUrl)
    this.setClickAction(data.clickAction)
    this.setPriority(data.priority)
    return this
  }
  build(): INotification {
    return new PushNotification(this.deviceToken, this.title, this.message, this.imagenUrl, this.clickAction, this.priority)
  }
}