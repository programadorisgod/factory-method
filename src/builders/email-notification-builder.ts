import type { INotificationBuilder } from "../interfaces/notification-builder.js";
import type { INotification } from "../interfaces/notification.js";
import { EmailNotification } from "../Products/notification/email-notification.js";

export class EmailNotificationBuilder implements INotificationBuilder{
  private to: string = '';
  private subject: string = '';
  private body: string = '';
  private cc: string[] = [];
  private bcc: string[] = [];
  private attachments: string[] = [];
  private priority: 'high' | 'normal' | 'low' = 'normal';

  setTo(to: string) { this.to = to; return this; }
  setSubject(subject: string) { this.subject = subject; return this; }
  setBody(body: string) { this.body = body; return this; }
  setCC(cc: string[]) { this.cc = cc; return this; }
  setBCC(bcc: string[]) { this.bcc = bcc; return this; }
  setAttachments(attachments: string[]) { this.attachments = attachments; return this; }
  setPriority(priority: 'high' | 'normal' | 'low') { this.priority = priority; return this; }

  configure(data: any): this {
    this.setTo(data.to)
    this.setSubject(data.subject)
    this.setBody(data.body)
    this.setCC(data.cc)
    this.setBCC(data.bcc)
    this.setAttachments(data.attachments)
    this.setPriority(data.priority)
    return this;
  }

  build(): INotification {
    return new EmailNotification(this.to, this.subject, this.body, this.cc, this.bcc, this.attachments, this.priority);
  }

}