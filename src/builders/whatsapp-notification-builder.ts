import type { INotificationBuilder } from "../interfaces/notification-builder.js";
import type { INotification } from "../interfaces/notification.js";
import { WhatsAppNotification } from "../Products/notification/whatsapp-notification.js";

export class WhatsAppNotificationBuilder implements INotificationBuilder{

  private phoneNumber: string = ''
  private message: string = ''
  private mediaUrl: string = ''
  private caption: string = ''
  private interactiveButtons: [] = []
  private language: string = ''

  setPhoneNumber(phoneNumber: string) { this.phoneNumber = phoneNumber; return this }
  setMessage(message: string) { this.message = message; return this }
  setMediaUrl(mediaUrl: string) { this.mediaUrl = mediaUrl; return this }
  setCaption(caption: string) { this.caption = caption; return this }
  setInteractiveButtons(interactiveButtons: []) { this.interactiveButtons = interactiveButtons; return this }
  setLanguage(language: string) { this.language = language; return this }

  configure(data: any): this {
    this.setPhoneNumber(data.phoneNumber)
    this.setMessage(data.message)
    this.setMediaUrl(data.mediaUrl)
    this.setCaption(data.caption)
    this.setInteractiveButtons(data.interactiveButtons)
    this.setLanguage(data.language)
    return this
  }
  
  build(): INotification {
    return new WhatsAppNotification(this.phoneNumber, this.message, this.mediaUrl, this.caption, this.interactiveButtons, this.language)
  }
}