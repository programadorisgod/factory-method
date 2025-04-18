import type { INotificationBuilder } from "../interfaces/notification-builder.js";
import type { INotification } from "../interfaces/notification.js";
import { SMSNotification } from "../Products/notification/sms-notification.js";

export class SMSNotificationBuilder implements INotificationBuilder{
  private phoneNumber: string = '';
  private message: string = '';
  private senderId?: string;
  private deliveryReportRequired: boolean = false;
  private scheduleTime?: Date;

  setPhoneNumber(phone: string) { this.phoneNumber = phone; return this; }
  setMessage(message: string) { this.message = message; return this; }
  setSenderId(senderId: string) { this.senderId = senderId; return this; }
  setDeliveryReportRequired(required: boolean) { this.deliveryReportRequired = required; return this; }
  setScheduleTime(time: Date) { this.scheduleTime = time; return this; }

  configure(data: any): this {
    this.setPhoneNumber(data.phoneNumber)
    this.setMessage(data.message)
    this.setSenderId(data.senderId)
    this.setDeliveryReportRequired(data.deliveryReportRequired)
    this.setScheduleTime(data.scheduleTime)
    return this
  }

  build(): INotification {
    return new SMSNotification(this.phoneNumber, this.message, this.senderId, this.deliveryReportRequired, this.scheduleTime);
  }

}